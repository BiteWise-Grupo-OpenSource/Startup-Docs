# Capítulo III: Requirements Specification 

## 3.1 User Stories

| Epic / Story ID | Título | Descripción | Criterios de Aceptación | Relacionado con (Epic ID) |
| --- | --- | --- | --- | --- |
| EP001 / US001 | Registro de usuario normal | Como usuario, quiero registrarme como usuario normal proporcionando datos básicos y correo para acceder a la plataforma. | Escenario 1: Registro exitoso<br>Dado que el usuario ingresa datos válidos,<br>Cuando se registra,<br>Entonces se crea la cuenta y accede a la plataforma.<br><br>Escenario 2: Error de registro<br>Dado que los datos son inválidos,<br>Cuando se intenta registrar,<br>Entonces se muestra un mensaje de error. | EP001 |
| EP001 / US002 | Registro de nutricionista | Como nutricionista, quiero registrarme como nutricionista para acceder a funcionalidades especializadas. | Escenario 1: Registro exitoso<br>Dado que el visitante selecciona "nutricionista" e ingresa datos válidos,<br>Cuando se registra,<br>Entonces accede a su panel de nutricionista. | EP001 |
| EP001 / US003 | Login de usuario | Como usuario, quiero iniciar sesión con las credenciales que registré previamente. | Escenario 1: Login exitoso<br>Dado que el usuario selecciona su tipo e ingresa credenciales válidas,<br>Cuando inicia sesión,<br>Entonces accede a su panel principal.<br><br>Escenario 2: Error de login<br>Dado que los datos son incorrectos,<br>Cuando intenta acceder,<br>Entonces se muestra un mensaje de error. | EP001 |
| EP001 / US004 | Cerrar sesión | Como usuario, quiero cerrar sesión de forma segura en cualquier momento. | Escenario 1: Logout exitoso<br>Dado que el usuario está autenticado,<br>Cuando selecciona cerrar sesión,<br>Entonces sale de la plataforma. | EP001 |
| EP002 / US005 | Landing page testimonios | Como usuario, quiero ver una landing page que muestre los testimonios de sus usuarios para saber si es una plataforma util y confiable. | Escenario 1: Acceso a landing<br>Dado que se accede a la página principal,<br>Cuando se visualizan testimonios,<br>Entonces se muestran correctamente los contenidos. | EP002 |
| EP002 / US006 | Landing page preguntas frequentes | Como usuario, quiero ver una landing page que pueda resolverme algunas preguntas que son frecuentes entre los usuarios. | Escenario 1: Acceso a landing<br>Dado que se accede a la página principal,<br>Cuando se visualiza el apartado de preguntas frecuentes,<br>Entonces se muestran correctamente los contenidos. | EP002 |
| EP003 / US007 | Crear plan alimenticio semanal | Como usuario, quiero crear un plan alimenticio semanal respondiendo preguntas sobre preferencias y restricciones. | Escenario 1: Plan generado<br>Dado que el usuario responde las preguntas,<br>Cuando finaliza el proceso,<br>Entonces se genera y muestra el plan semanal. | EP003 |
| EP003 / US008 | Revisar plan alimenticio | Como usuario, quiero poder revisar mi plan alimenticio semanal en cualquier momento. | Escenario 1: Consulta de plan<br>Dado que el usuario tiene un plan generado,<br>Cuando accede a la sección de plan,<br>Entonces puede visualizar los detalles del plan. | EP003 |
| EP003 / US009 | Editar plan alimenticio | Como usuario, quiero editar mi plan alimenticio semanal si mis preferencias cambian. | Escenario 1: Edición exitosa<br>Dado que el usuario tiene un plan,<br>Cuando edita el plan a su gusto,<br>Entonces el plan se actualiza. | EP003 |
| EP004 / US010 | Gestionar preferencias alimenticias | Como usuario, quiero agregar y editar mis preferencias y problemas con alimentos. | Escenario 1: Preferencias guardadas<br>Dado que el usuario agrega o edita preferencias,<br>Cuando guarda,<br>Entonces el sistema actualiza la información. | EP004 |
| EP004 / US011 | Visualizar preferencias | Como usuario, quiero ver mis preferencias y restricciones alimenticias guardadas. | Escenario 1: Visualización exitosa<br>Dado que el usuario accede a la sección de preferencias,<br>Cuando revisa,<br>Entonces ve la información correctamente. | EP004 |
| EP004 / US012 | Eliminar preferencias | Como usuario, quiero eliminar preferencias o restricciones que ya no aplican. | Escenario 1: Eliminación exitosa<br>Dado que el usuario tiene preferencias,<br>Cuando elimina alguna,<br>Entonces desaparece de su perfil. | EP004 |
| EP005 / US013 | Explorar recetas | Como usuario, quiero explorar recetas para aprender nuevas comidas. | Escenario 1: Recetas listadas<br>Dado que el usuario accede a la sección de recetas,<br>Cuando navega,<br>Entonces puede ver distintas recetas. | EP005 |
| EP005 / US014 | Ver detalles de receta | Como usuario, quiero ver los pasos e ingredientes de una receta seleccionada. | Escenario 1: Detalles mostrados<br>Dado que el usuario selecciona una receta,<br>Cuando accede a detalles,<br>Entonces ve los pasos e ingredientes. | EP005 |
| EP005 / US015 | Marcar receta como favorita | Como usuario, quiero marcar recetas como favoritas para acceder fácilmente y recibir recomendaciones. | Escenario 1: Favorito guardado<br>Dado que el usuario marca una receta,<br>Cuando la guarda,<br>Entonces aparece en su lista de favoritos. | EP005 |
| EP005 / US016 | Ver recetas favoritas | Como usuario, quiero ver y gestionar mis recetas favoritas. | Escenario 1: Visualización exitosa<br>Dado que el usuario tiene recetas favoritas,<br>Cuando accede a la sección,<br>Entonces puede verlas y quitarlas si desea. | EP005 |
| EP006 / US017 | Modificar datos de cuenta | Como usuario, quiero modificar mis datos personales desde la sección de cuenta. | Escenario 1: Modificación exitosa<br>Dado que el usuario accede a su cuenta,<br>Cuando edita sus datos,<br>Entonces los cambios se guardan. | EP006 |
| EP006 / US018 | Vincularme con nutricionista (QR) | Como usuario, quiero vincular mi cuenta con un nutricionista escaneando un QR. | Escenario 1: Vinculación exitosa<br>Dado que el usuario indica que ya tiene nutricionista,<br>Cuando el nutricionista escanea el QR,<br>Entonces se vinculan las cuentas. | EP006 |
| EP006 / US019 | Buscar nutricionista | Como usuario, quiero buscar nutricionistas en un directorio y ver sus datos de contacto. | Escenario 1: Directorio visible<br>Dado que el usuario no tiene nutricionista,<br>Cuando accede al directorio,<br>Entonces puede ver información de varios nutricionistas. | EP006 |
| EP006 / US020 | Ver estado de vinculación | Como usuario, quiero ver si ya estoy vinculado a un nutricionista o no. | Escenario 1: Estado visible<br>Dado que el usuario accede a la sección de cuenta,<br>Cuando revisa,<br>Entonces ve si está vinculado o no. | EP006 |
| EP006 / US021 | Desvincular nutricionista | Como usuario, quiero desvincularme de un nutricionista si ya no deseo su asesoría. | Escenario 1: Desvinculación exitosa<br>Dado que el usuario está vinculado,<br>Cuando solicita desvincularse,<br>Entonces la relación se elimina. | EP006 |
| EP007 / US022 | Chatear con nutricionista | Como usuario, quiero chatear con mi nutricionista. | Escenario 1: Chatear con nutricionista<br>Dado que el usuario accede a la sección nutricionista,<br>Cuando accede al chat,<br>Entonces podra hablar con su nutricionista. Escenario 2: No tiene nutricionista<br>Dado que el usuario no se ha vinculado con un nutricionista<br>Cuando clickea en nutricionista<br>Entonces se lo redigira a la sección de buscar nutricionista | EP007 |
| EP008 / US023 | Registro de clientes | Como nutricionista, quiero poder acceder a un registro ordenado para poder chatear facilmente con ellos. | Escenario 1: Acceder a sección registro<br>Dado que el nutricionista esta en la pagina principal,<br>Cuando accede a Registro,<br>Entonces podra visualizar ordenadamente a sus clientes. | EP008 |
| EP008 / US024 | Visualizar plan de cliente | Como nutricionista, quiero poder acceder al plan nutricional de mi cliente para corroborar que se este alimentando correctamente. | Escenario 1: Revisar plan<br>Dado que el nutricionista esta en el registro,<br>Cuando accede al chat con su cliente y presionar el boton Plan,<br>Entonces podra visualizar el plan de su cliente. | EP008 |
| EP008 / US025 | Agendar citas | Como nutricionista, quiero poder agendar citas con mis clientes para que vengan de manera presencial y discutir correctamente sobre su nutrición. | Escenario 1: Registrar cita<br>Dado que quiere registrar una cita con su cliente,<br>Cuando selecciona agendar cita,<br>Entonces podra llenar un formulario para agendar la cita. | EP008 |
| EP009 / US026 | Revisar noticias | Como nutricionista, quiero poder leer noticias actuales sobre investigaciones nutricionales para estar al día con la información. | Escenario 1: Acceder a noticias<br>Dado que quiere acceder a noticias<br>Cuando selecciona la sección noticias,<br>Entonces accederá a noticias actuales sobre nutrición. | EP009 |
| EP009 / US027 | Revisar estudios | Como nutricionista, quiero poder revisar estudios pasados sobre alimentación para estar informado y darle recomendaciones a mis cliente. | Escenario 1: Acceder a estudios<br>Dado que quiere acceder a la sección estudios<br>Cuando selecciona la sección estudios,<br>Entonces accederá a la sección de estudios. | EP009 |
| EP010 / US028 | Revisar Terminos y Condiciones | Como usuario, quiero poder revisar los terminos y condiciones para evitar problemas. | Escenario 1: Acceder a Terminos y Condiciones<br>Dado que quiero leer los terminos y condiciones<br>Cuando selecciona terminos y condiciones ubicado en el footer,<br>Entonces será redireccionado a los terminos y condiciones. | EP010 |
| EP010 / US029 | Revisar Política de privacidad | Como usuario, quiero poder revisar la política de privacidad para evitar problemas. | Escenario 1: Acceder a Política de privacidad<br>Dado que quiero leer la política de privacidad<br>Cuando selecciona Política de privacidad ubicado en el footer,<br>Entonces será redireccionado a la Política de privacidad. | EP010 |
| EP011 / TS001 | Endpoint para Generar Plan | Como desarrollador, quiero un endpoint RESTful para generar planes de alimentación. | Escenario 1: Solicitud exitosa<br>Dado que se envía una solicitud POST a /api/plans con preferencias,<br>Cuando se procesa la solicitud,<br>Entonces se devuelve un plan de comidas en formato JSON.<br><br>Escenario 2: Error en solicitud<br>Dado que se envía una solicitud POST inválida,<br>Cuando se procesa,<br>Entonces se devuelve un error 400. | EP011 |
| EP011 / TS002 | Endpoint para Obtener Perfil | Como desarrollador, quiero un endpoint para obtener datos de perfil de usuario. | Escenario 1: Autenticado<br>Dado que se envía una solicitud GET a /api/profile/{id},<br>Cuando se autentica,<br>Entonces se devuelven los datos de perfil de usuario. | EP011 |
| EP011 / TS003 | Endpoint para Actualizar Plan | Como desarrollador, quiero un endpoint para actualizar un plan existente. | Escenario 1: Actualización exitosa<br>Dado que se envía una solicitud PUT a /api/plans/{id} con cambios,<br>Cuando se autentica,<br>Entonces se actualiza el plan y se confirma. | EP011 |



## 3.2 Impact Mapping

<img src="img/impactMapping.png" alt="impactMapping">

## 3.3 Product Backlog

| # Orden | User Story Id | Título | Descripción | Story Points (1 / 2 / 3 / 5 / 8) |
| --- | --- | --- | --- | --- |
| 1 | US001 | Registro de usuario normal | Como usuario, quiero registrarme como usuario normal proporcionando datos básicos y correo para acceder a la plataforma. | 3 |
| 2 | US003 | Login de usuario | Como usuario, quiero iniciar sesión con las credenciales que registré previamente. | 3 |
| 3 | US004 | Cerrar sesión | Como usuario, quiero cerrar sesión de forma segura en cualquier momento. | 2 |
| 4 | US002 | Registro de nutricionista | Como nutricionista, quiero registrarme como nutricionista para acceder a funcionalidades especializadas. | 5 |
| 5 | US005 | Landing page testimonios | Como usuario, quiero ver una landing page que muestre los testimonios de sus usuarios para saber si es una plataforma util y confiable. | 2 |
| 6 | US006 | Landing page preguntas frequentes | Como usuario, quiero ver una landing page que pueda resolverme algunas preguntas que son frecuentes entre los usuarios. | 2 |
| 7 | US007 | Crear plan alimenticio semanal | Como usuario, quiero crear un plan alimenticio semanal respondiendo preguntas sobre preferencias y restricciones. | 8 |
| 8 | US008 | Revisar plan alimenticio | Como usuario, quiero poder revisar mi plan alimenticio semanal en cualquier momento. | 3 |
| 9 | US009 | Editar plan alimenticio | Como usuario, quiero editar mi plan alimenticio semanal si mis preferencias cambian. | 5 |
| 10 | US010 | Gestionar preferencias alimenticias | Como usuario, quiero agregar y editar mis preferencias y problemas con alimentos. | 5 |
| 11 | US011 | Visualizar preferencias | Como usuario, quiero ver mis preferencias y restricciones alimenticias guardadas. | 2 |
| 12 | US012 | Eliminar preferencias | Como usuario, quiero eliminar preferencias o restricciones que ya no aplican. | 2 |
| 13 | US013 | Explorar recetas | Como usuario, quiero explorar recetas para aprender nuevas comidas. | 3 |
| 14 | US014 | Ver detalles de receta | Como usuario, quiero ver los pasos e ingredientes de una receta seleccionada. | 2 |
| 15 | US015 | Marcar receta como favorita | Como usuario, quiero marcar recetas como favoritas para acceder fácilmente y recibir recomendaciones. | 3 |
| 16 | US016 | Ver recetas favoritas | Como usuario, quiero ver y gestionar mis recetas favoritas. | 3 |
| 17 | US017 | Modificar datos de cuenta | Como usuario, quiero modificar mis datos personales desde la sección de cuenta. | 3 |
| 18 | US018 | Vincularme con nutricionista (QR) | Como usuario, quiero vincular mi cuenta con un nutricionista escaneando un QR. | 5 |
| 19 | US019 | Buscar nutricionista | Como usuario, quiero buscar nutricionistas en un directorio y ver sus datos de contacto. | 3 |
| 20 | US020 | Ver estado de vinculación | Como usuario, quiero ver si ya estoy vinculado a un nutricionista o no. | 2 |
| 21 | US021 | Desvincular nutricionista | Como usuario, quiero desvincularme de un nutricionista si ya no deseo su asesoría. | 2 |
| 22 | US022 | Chatear con nutricionista | Como usuario, quiero chatear con mi nutricionista. | 5 |
| 23 | US023 | Registro de clientes | Como nutricionista, quiero poder acceder a un registro ordenado para poder chatear facilmente con ellos. | 5 |
| 24 | US024 | Visualizar plan de cliente | Como nutricionista, quiero poder acceder al plan nutricional de mi cliente para corroborar que se este alimentando correctamente. | 3 |
| 25 | US025 | Agendar citas | Como nutricionista, quiero poder agendar citas con mis clientes para que vengan de manera presencial y discutir correctamente sobre su nutrición. | 5 |
| 26 | US026 | Revisar noticias | Como nutricionista, quiero poder leer noticias actuales sobre investigaciones nutricionales para estar al día con la información. | 2 |
| 27 | US027 | Revisar estudios | Como nutricionista, quiero poder revisar estudios pasados sobre alimentación para estar informado y darle recomendaciones a mis cliente. | 2 |
| 28 | US028 | Revisar Terminos y Condiciones | Como usuario, quiero poder revisar los terminos y condiciones para evitar problemas. | 1 |
| 29 | US029 | Revisar Política de privacidad | Como usuario, quiero poder revisar la política de privacidad para evitar problemas. | 1 |
| 30 | TS001 | Endpoint para Generar Plan | Como desarrollador, quiero un endpoint RESTful para generar planes de alimentación. | 8 |
| 31 | TS002 | Endpoint para Obtener Perfil | Como desarrollador, quiero un endpoint para obtener datos de perfil de usuario. | 3 |
| 32 | TS003 | Endpoint para Actualizar Plan | Como desarrollador, quiero un endpoint para actualizar un plan existente. | 5 |