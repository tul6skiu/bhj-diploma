/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */

  onSubmit(data) {
    User.register(data, (err, response) => {
      if (response && response.success) {
        App.setState('user-logged');

        const modal = App.getModal('register');
        if (modal) {
          modal.close();
        }
      } else {
        alert('Ошибка регистрации: ' + (response?.error || err || 'Неизвестная ошибка'));
      }
    });
  }
}