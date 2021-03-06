import { ActivationConstants } from 'actions/Activation'

const initialState = {
  backupWarningDismissed: false,
  carouselCompleted: false,
  notifications: {
    prompt: null,
    permissions: {
      hard: {},
      soft: {},
    },
  },
}

export default function Activation(state = initialState, action = {}) {
  switch (action.type) {
    case ActivationConstants.PROMPT_FOR_NOTIFICATIONS:
      return { ...state, notifications: { ...state.notifications, prompt: action.prompt }}

    case ActivationConstants.STORE_NOTIFICATIONS_PERMISSIONS:
      const obj = {
        ...state,
        notifications: {
          permissions: {
            ...state.notifications.permissions.soft,
            hard: action.permissions || {},
          },
        },
      }

      return obj

    case ActivationConstants.UPDATE_BACKUP_WARNING_STATUS:
      return { ...state, backupWarningDismissed: action.dismissed }

    case ActivationConstants.UPDATE_CAROUSEL_STATUS:
      return { ...state, carouselCompleted: action.completed }
  }
  
  return state
}
