- [Español](#español)

  - [Demo](#demo)
  - [Desarrollo](#desarrollo)
  - [Ejecución del Proyecto](#ejecución-del-proyecto)
  - [Pruebas](#pruebas)

- [English](#english)
  - [Demo](#demo)
  - [Development](#development)
  - [Running the Project](#running-the-project)
  - [Testing](#testing)

---

## Español

# Challenge Desarrollador Junior - Reserva de Servicios

Este proyecto es una versión simplificada pero funcional de una página de reserva, siguiendo el flujo proporcionado en los diseños. La tarea se centró en desarrollar la interfaz de usuario y las funcionalidades necesarias para realizar una reserva.

## Demo

Puedes ver una demo del proyecto [aquí](https://challenge-planify.vercel.app/).

## Desarrollo

- **Tecnologías Utilizadas:**

  - React
  - Typescript
  - CSS Modules
  - Playwright

- **Estructura del Proyecto:**

  - El proyecto está estructurado en diferentes componentes y páginas que representan las diferentes etapas del proceso de reserva (selección de servicio, selección de horario, confirmación de reserva, lista de reservas confirmadas).

- **Gestión de Estado:**

  - Se utilizó el contexto de React para gestionar el estado de la reserva y las reservas confirmadas.

- **Persistencia de Datos:**

  - Se utilizó el localStorage para almacenar la reserva actual y las reservas confirmadas, asegurando que la información persista entre sesiones.

- **Interfaz de Usuario:**

  - Se implementó una interfaz intuitiva y responsiva, siguiendo los diseños proporcionados en el challenge.

- **Validación de Selecciones:**
  - Se validó que todas las selecciones necesarias se hayan realizado antes de permitir al usuario proceder a la pantalla de confirmación.

## Ejecución del Proyecto

Para ejecutar el proyecto de forma local, sigue estos pasos:

1. Clona el repositorio: `git clone https://github.com/lucastamburlini/challenge-planify`
2. Instala las dependencias: `npm install`
3. Ejecuta el proyecto: `npm run dev`

## Pruebas

Se realizaron pruebas automatizadas utilizando Playwright para garantizar el correcto funcionamiento de las funcionalidades de reserva. Las pruebas incluyeron la selección de un servicio, la selección de un horario, la confirmación de la reserva y la validación de la interfaz de usuario en diferentes dispositivos y tamaños de pantalla.

Para ejecutar las pruebas, sigue estos pasos:

1. Asegúrate de tener el proyecto clonado y las dependencias instaladas según se describe en la sección de Ejecución del Proyecto.
2. Ejecuta el proyecto: `npm run dev`
3. Ejecuta los test: `npx playwright test`
4. Muestra los resultados ejecutando`npx playwright show-report`

<span style="color:red;">Ten en cuenta que al ejecutar las pruebas automatizadas, se abrirá el navegador tanto para las pruebas como para visualizar el reporte de resultados.</span>

Esto iniciará las pruebas automatizadas y mostrará los resultados en la terminal.

---

## English

# Junior Developer Challenge - Service Booking

This project is a simplified but functional version of a booking page, following the flow provided in the designs. The task focused on developing the user interface and the necessary functionalities to make a reservation.

## Demo

You can see a demo of the project [here](https://challenge-planify.vercel.app/).

## Development

- **Technologies Used:**

  - React
  - Typescript
  - CSS Modules
  - Playwright

- **Project Structure:**

  - The project is structured into different components and pages representing the different stages of the booking process (service selection, time selection, reservation confirmation, list of confirmed reservations).

- **State Management:**

  - React context was used to manage the state of the reservation and confirmed reservations.

- **Data Persistence:**

  - LocalStorage was used to store the current reservation and confirmed reservations, ensuring that the information persists between sessions.

- **User Interface:**

  - An intuitive and responsive interface was implemented, following the designs provided in the challenge.

- **Selection Validation:**
  - It was validated that all necessary selections have been made before allowing the user to proceed to the confirmation screen.

## Running the Project

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/lucastamburlini/challenge-planify`
2. Install dependencies: `npm install`
3. Run the project: `npm run dev`

## Testing

Automated tests were performed using Playwright to ensure the correct functioning of the booking functionalities. The tests included selecting a service, selecting a schedule, confirming the reservation, and validating the user interface on different devices and screen sizes.

To run the tests, follow these steps:

1. Ensure that you have cloned the repository and installed the dependencies as described in the "Running the Project" section.
2. Run the project: `npm run dev`
3. Run the tests: `npx playwright test`
4. Display the results by running: `npx playwright show-report`

<span style="color:red;">Please note that when running the automated tests, the browser will open for both running the tests and viewing the results report.</span>

This will start the automated tests and display the results in the terminal.
