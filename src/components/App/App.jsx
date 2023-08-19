import React, { Component } from 'react';

import Section from 'components/Section/Section';
import Feedback from 'components/Feedback/Feedback';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackCount = evt => {
    const btn = evt.target.name;
    this.setState(prevState => ({ [btn]: prevState[btn] + 1 }));
  };

  totalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

  positiveFeedbackPersentage = () =>
    Math.round(
      (100 * this.state.good) /
        (this.state.good + this.state.neutral + this.state.bad)
    );

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.totalFeedback();
    return (
      <>
        <Section title="Please leave your feedback">
          <Feedback
            options={options}
            onLeaveFeedback={this.feedbackCount}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positive={this.positiveFeedbackPersentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;