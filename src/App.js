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

  handelChangerGood = () => {
    this.setState((state) => {
      return {
        good: state.good + 1,
      }
    })
  }

  handelChangerNeutral = () => {
    this.setState((state) => {
      return {
        neutral: state.neutral + 1,
      }
    })
  }

  handelChangerBad = () => {
    this.setState((state) => {
      return {
        bad: state.bad + 1,
      }
    })
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  }

  handelChanger = (name) => {
    if (name === 'good') {
      this.handelChangerGood()
    } else if (name === 'neutral') {
      this.handelChangerNeutral()
    } else if (name === 'bad') {
      this.handelChangerBad()
    }
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
