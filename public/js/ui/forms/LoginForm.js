/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.login(data, (err, response) => {
      if (response && response.success) {
        App.setState('user-logged');

        const modal = App.getModal('login');
        if (modal) {
          modal.close();
        }
      } else {
        alert('Ошибка входа: ' + (response?.error || err || 'Неизвестная ошибка'));
      }
    });
  }
}