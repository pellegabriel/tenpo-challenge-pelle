export const clerkTheme = {
  baseTheme: undefined,
  variables: {
    colorPrimary: '#03ff94',
    colorText: '#ffffff',
    colorBackground: '#0a0a0a',
    colorInputBackground: '#171717',
    colorInputText: '#ffffff',
    colorTextSecondary: '#9b9b9b',
    colorTextOnPrimaryBackground: '#000000',
    colorDanger: '#ff5e69',
    colorSuccess: '#03ff94',
    colorWarning: '#ffa84b'
  },
  elements: {
    formButtonPrimary: {
      backgroundColor: '#03ff94',
      color: '#000000',
      '&:hover': {
        backgroundColor: '#02e085'
      }
    },
    socialButtonsBlockButton: {
      backgroundColor: '#171717',
      color: '#ffffff',
      borderColor: '#333333',
      '&:hover': {
        backgroundColor: '#222222'
      }
    },
    userButtonPopoverActionButton: {
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#171717',
        color: '#03ff94'
      }
    },
    userButtonPopoverCard: {
      backgroundColor: '#0a0a0a',
      borderColor: '#333333'
    },
    userButtonPopoverFooter: {
      borderColor: '#333333'
    },
    userButtonPopoverActionButtonText: {
      color: '#ffffff'
    },
    userButtonPopoverActionButtonIcon: {
      color: '#ffffff'
    },
    formFieldInput: {
      backgroundColor: '#171717',
      color: '#ffffff',
      borderColor: '#333333',
      '&:focus': {
        borderColor: '#03ff94'
      }
    },
    formFieldLabel: {
      color: '#ffffff'
    },
    formFieldAction: {
      color: '#03ff94',
      '&:hover': {
        color: '#02e085'
      }
    },
    formFieldHintText: {
      color: '#9b9b9b'
    },
    formFieldErrorText: {
      color: '#ff5e69'
    },
    card: {
      backgroundColor: '#0a0a0a',
      borderColor: '#333333'
    },
    headerTitle: {
      color: '#ffffff'
    },
    headerSubtitle: {
      color: '#9b9b9b'
    },
    footerActionLink: {
      color: '#03ff94',
      '&:hover': {
        color: '#02e085'
      }
    },
    identityPreviewEditButton: {
      color: '#03ff94',
      '&:hover': {
        color: '#02e085'
      }
    },
    identityPreviewText: {
      color: '#ffffff'
    },
    formFieldInputShowPasswordButton: {
      color: '#9b9b9b',
      '&:hover': {
        color: '#ffffff'
      }
    },
    formFieldInputShowPasswordIcon: {
      color: '#9b9b9b'
    },
    formFieldInputShowPasswordIconHover: {
      color: '#ffffff'
    },
    formFieldInputShowPasswordIconActive: {
      color: '#03ff94'
    },
    formFieldInputShowPasswordIconActiveHover: {
      color: '#02e085'
    },
    formFieldInputShowPasswordIconDisabled: {
      color: '#666666'
    },
    formFieldInputShowPasswordIconDisabledHover: {
      color: '#9b9b9b'
    },
    formFieldInputShowPasswordButtonHover: {
      backgroundColor: '#171717'
    },
    formFieldInputShowPasswordButtonActive: {
      backgroundColor: '#171717'
    },
    formFieldInputShowPasswordButtonActiveHover: {
      backgroundColor: '#222222'
    },
    formFieldInputShowPasswordButtonDisabled: {
      backgroundColor: '#0a0a0a'
    },
    formFieldInputShowPasswordButtonDisabledHover: {
      backgroundColor: '#171717'
    }
  }
} as const; 