import OneSignal from 'react-onesignal';

const promptOptions = {
  appId: 'c1334280-26c6-409b-9e4c-4230e5c99aba',
  serviceWorkerParam: {
    scope: '/push/',
  },
  serviceWorkerPath: 'OneSignalSDKWorker.js',
  serviceWorkerUpdaterPath: 'OneSignalSDKWorker.js',
  promptOptions: {
    slidedown: {
      prompts: [
        {
          type: 'push', // current types are "push" & "category"
          autoPrompt: true,
          force: true,
          text: {
            /* limited to 90 characters */
            actionMessage: 'Want to stay up to date? Subscribe and be the first to hear new cities and new dates!',
            /* acceptButton limited to 15 characters */
            acceptButton: 'Subscribe',
            /* cancelButton limited to 15 characters */
            cancelButton: 'Maybe Later',
          },
          delay: {
            pageViews: 1,
            timeDelay: 20,
          },
        },
      ],
    },
  },
};



const useNotification = () => {


  async function runOneSignal() {
    await OneSignal.init(promptOptions)
      .then(() => {
        return OneSignal.Slidedown.promptPush();
      });

  }
  return {
    runOneSignal,
  };
};

export default useNotification;