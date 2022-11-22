export function useTelegram() {
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

  return {
    tg,
    onClose,
    onToggle,
    user: tg.initDataUnsafe?.user,
  };
}
