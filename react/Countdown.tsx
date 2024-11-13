// store-block/react/Countdown.tsx
import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedMessage } from 'react-intl'

import { TimeSplit } from './typings/global'
import { tick, getTwoDaysFromNow } from './utils/time'

interface CountdownProps {
  subtitle: string
  title: string
  targetDate: string
  ctaText?: string
  ctaLink?: string
}

const DEFAULT_TARGET_DATE = getTwoDaysFromNow()

const CSS_HANDLES = ['container', 'countdown', 'title', 'subtitle', 'ctaButton']

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
  title,
  subtitle,
  targetDate = DEFAULT_TARGET_DATE,
  ctaText = 'Learn More',
  ctaLink = 'https://www.example.com',
}) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  const titleText = title || <FormattedMessage id="countdown.title" />

  const subtitleText = subtitle || <FormattedMessage id="countdown.subtitle" />

  const handles = useCssHandles(CSS_HANDLES)

  tick(targetDate, setTime)

  return (
    <div className={`${handles.container} flex`}>
      <div className={`${handles.title} flex-auto tc`}>{titleText}</div>
      <div className={`${handles.subtitle} flex-auto tc`}>
        {subtitleText}
      </div>{' '}
      {/* subrayado */}
      <div className={`${handles.countdown} db tc flex-auto`}>
        <span>{` ${timeRemaining.days}:${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}</span>
      </div>
      <div className={`${handles.ctaButton} db tc`}>
        {ctaText && ctaLink && (
          <a href={ctaLink} className={`${handles.ctaButton} db tc `}>
            {ctaText}
          </a>
        )}
      </div>
    </div>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    title: {
      title: 'Cuerpo para Countdown Component',
      type: 'string',
      default: null,
    },
    subtitle: {
      title: 'Agregar texto al lado izq countdown',
      type: 'string',
      default: null,
    },
    targetDate: {
      title: 'Final date',
      description: 'Final date used in the countdown',
      type: 'string',
      default: null,
    },
    ctaText: {
      title: 'Titulo de botón',
      description: 'Titulo para la Url para el CTA button',
      type: 'string',
      default: 'Saber más',
    },
    ctaLink: {
      title: 'URL Botón',
      description: 'URL para el CTA Button',
      type: 'string',
      default: 'https://www.example.com',
    },
  },
}

export default Countdown
