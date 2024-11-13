const countdownSchema = {
  title: 'Custom Countdown',
  description:
    ' Countdown that is displayed when an specific prommotion is action for a limited time',
  type: 'object',
  properties: {
    targetDate: {
      title: ' Final date',
      description: 'Final date used in the countdown',
      type: 'string',
      default: 'null',
    },
  },
}

export default countdownSchema
