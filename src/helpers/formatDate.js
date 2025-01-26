import { format } from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export const formatDateToNow = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const formatDate = date => {
  return format(new Date(date), 'Pp');
};
