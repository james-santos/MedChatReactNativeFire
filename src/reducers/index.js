import status from './status';
import member from './member';
import stories from './stories';
import locale from './locale';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  rehydrated,
  status,
  member,
  stories,
  locale,
};
