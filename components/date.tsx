import React from 'react';
import { format, parseISO } from 'date-fns';

export default function Date({ dateString }: {dateString: string}): JSX.Element {
  const date: Date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'dd LLLL yyyy')}</time>;
}
