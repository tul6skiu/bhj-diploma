/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(data) {
    Account.create(data, (err, response) => {
      if (response && response.success) {
        const modal = App.getModal('createAccount');
        modal.close();
        App.update();
      } else {
        alert('Ошибка входа: ' + (response?.error || err || 'Неизвестная ошибка'));
      }
    });
  }
}