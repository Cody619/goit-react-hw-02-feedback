import './App.css'
import { Component } from 'react'
import { Statistics } from './components/Statistics.js'
import { FeedbackOptions } from './components/FeedbackOptions.js'
import { Section } from './components/Section.js'
import { Notification } from './components/Notification.js'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  }

  handelChanger = (name) => {
    this.setState((state) => {
      return {
        [name]: state[name] + 1,
      }
    })
  }

  render() {
    const { good, bad, neutral } = this.state
    const total = this.countTotalFeedback()
    return (
      <div>
        <Section title="Please Leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handelChanger}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message={'No feedback given'} />
          ) : (
            <Statistics
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              good={good}
              neutral={neutral}
              bad={bad}
            />
          )}
        </Section>
      </div>
    )
  }
}
