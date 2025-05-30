/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const btn = document.querySelector('.sidebar-toggle');
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const body = document.body;

    // Переключение классов
    if (body.classList.contains('sidebar-open')) {
      body.classList.remove('sidebar-open');
      body.classList.add('sidebar-collapse');
    } else {
      body.classList.remove('sidebar-collapse');
      body.classList.add('sidebar-open');
    }
    });
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const btns = Array.from(document.querySelectorAll('.menu-item'));
    
    btns.forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        if (el.classList.contains('menu-item_register')) {
          App.getModal('register').open();
        }else if (el.classList.contains('menu-item_login')) {
          App.getModal('login').open();
        }else {
          User.logout();
          App.setState('init');
        }
      })
    })
  }
}