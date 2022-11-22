const tg = window.Telegram.WebApp;

const onClose = () => {
  tg.close();
};

const onToggle = () => {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.show();
  }
};

export function useTelegram() {
  return {
    tg,
    onClose,
    onToggle,
    user: tg.initdataUnsafe?.user,
  };
}
