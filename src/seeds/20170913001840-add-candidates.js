const faker = require('faker');

module.exports = {
  up(queryInterface) {
    const candidatesData = [];
    candidatesData.push({
      name: "Sebastián Piñera",
      slogan: "Slogan",
      bio: "Piñera manifestó desde 2014 sus intenciones de volver a competir en 2017, siendo desde entonces el político mejor posicionado para enfrentar la elección según distintas encuestas.​ Piñera aplazó su decisión para marzo de 2017, a pesar de recibir la presión de los partidos de la coalición y de su potencial rival, Manuel José Ossandón. El 17 de diciembre de 2016 fue proclamado por el Partido Regionalista Independiente como su candidato presidencial. El 21 de marzo, en un acto en el Parque Quinta Normal, Piñera lanzó oficialmente su precandidatura presidencial. El 24 de marzo recibió el apoyo de la Unión Demócrata Independiente,​ mientras que Renovación Nacional hizo lo mismo al día siguiente. Como ganador de la primaria del 2 de julio, Piñera sumó el respaldo de Evolución Política. El 8 de julio fue proclamado como candidato por Amplitud, partido que lo apoya por fuera de Chile Vamos.​",
      birthday: "1 de diciembre de 1949",
      political_party: "Chile Vamos",
      image:"http://oliviacrellin.com/wp-content/uploads/2015/08/sebastian-pinera-millonarios-chile.jpg",
      partyImage:"https://pbs.twimg.com/profile_images/811256213245718528/Z18xkj_T.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    candidatesData.push({
      name: "Carolina Goic",
      slogan: "Slogan",
      bio: "Tras su elección como presidenta del Partido Demócrata Cristiano en enero de 2017, diversos militantes se manifestaron a favor de levantarla como precandidata presidencial del partido, aunque ella lo descartó en diversas ocasiones.27​28​ Sin embargo, en febrero de 2017, Goic afirmó a La Tercera que asumía «el desafío de ser candidata presidencial de la DC»,29​ siendo proclamada por la Junta Nacional de su partido el 11 de marzo.30​ El 29 de abril, la Junta Nacional del partido decidió que la candidatura de Goic se presentara directamente en primera vuelta, excluyendo al partido de las primarias presidenciales de la Nueva Mayoría.31​ Con ello, se quebró así la coalición electoral del PDC con el bloque PS-PPD-PRSD (hasta 2012, la Concertación) luego de 28 años.31​",
      birthday: "20 de diciembre de 1972",
      political_party: "Partido Demócrata Cristiano",
      image:"http://www.laizquierdadiario.cl/IMG/arton81473.jpg",
      partyImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Emblem_of_the_Christian_Democrat_Party_of_Chile.svg/1200px-Emblem_of_the_Christian_Democrat_Party_of_Chile.svg.png",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    candidatesData.push({
      name: "José Antonio Kast",
      slogan: "Slogan",
      bio: "En septiembre de 2015 anunció su intención de competir en una eventual primaria de Chile Vamos.34​ El 31 de mayo de 2016 renunció a su militancia en la UDI, entre otras razones, para continuar con sus aspiraciones presidenciales.35​ Desde entonces comenzó a recolectar firmas para levantar su candidatura independiente.36​ El 1 de abril de 2017 anunció que consiguió más de 30 000 firmas para ser candidato a la Presidencia.37​ El 14 de septiembre recibió el respaldo del partido político en formación «Unidos en la Fe».38​",
      birthday: "18 de enero de 1966",
      political_party: "Independiente",
      image:"http://www.cnnchile.cl/sites/default/files/jose_antonio_kast_2.jpg",
      partyImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1200px-Flag_of_Chile.svg.png",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    candidatesData.push({
      name: "Alejandro Guillier",
      slogan: "Slogan",
      bio: "Bio",
      birthday: "5 de marzo de 1953",
      political_party: "Partido Socialista de Chile",
      image:"https://media.biobiochile.cl/wp-content/uploads/2016/11/a_uno_711263-730x350.jpg",
      partyImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Emblem_of_the_Socialist_Party_of_Chile.svg/1200px-Emblem_of_the_Socialist_Party_of_Chile.svg.png",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    candidatesData.push({
      name: "Beatriz Sánchez",
      slogan: "Slogan",
      bio: "Conocida por dedicarse al periodismo político y las entrevistas de actualidad, fue presentadora del programa Hora 20 en La Red, y ha trabajado en las principales radios informativas de Chile, como Radio Bío-Bío, Radio ADN, Radio Cooperativa y Radio Chilena. \nActualmente es la candidata presidencial del Frente Amplio para las elecciones presidenciales de noviembre del 2017",
      birthday: "24 de diciembre de 1970",
      political_party: "Frente Amplio",
      image:"http://d2vpb0i3hb2k8a.cloudfront.net/wp-content/uploads/sites/7/2017/04/16/Beatriz-S%C3%A1nchez1-820x385.jpg",
      partyImage:"http://frente-amplio.cl/sites/all/themes/frente/img/footer_logo.png",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    candidatesData.push({
      name: "Marco Enríquez-Ominami",
      slogan: "Slogan",
      bio: "En diciembre de 2013, el fundador del Partido Progresista anunció que postulará por tercera vez a la presidencia de la República.74​ A pesar de verse involucrado en el Caso SQM —por el cual fue formalizado el 19 de octubre de 2016—,75​ no ha bajado su candidatura, la cual se ha visto mermada en encuestas hacia fines de 2016, y fue el punto de desacuerdo que impidió el PRO integrara el Frente Amplio.76​",
      birthday: "12 de junio de 1973",
      political_party: "Partido Progresista",
      image:"http://img.soy-chile.cl/Fotos/2017/01/22/file_20170122110952.jpg",
      partyImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Emblema_Partido_Progresista_Chile_%282013%29.svg/1200px-Emblema_Partido_Progresista_Chile_%282013%29.svg.png",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    candidatesData.push({
      name: "Eduardo Artés",
      slogan: "Slogan",
      bio: "El líder histórico del PC (AP) y actual presidente de Unión Patriótica, será candidato presidencial de este último partido para la elección de 2017, tras haber conseguido la cantidad de afiliados exigida por el Servicio Electoral.79​ El 28 de junio de 2017 fue creada la Mesa de Izquierda Popular, conformada por los siguientes partidos y colectividades que apoyan la candidatura de Artés: Unión Patriótica (UPA), Partido Comunista (Acción Proletaria) (PC(AP)), Partido Constituyente, Movimiento Patriótico Manuel Rodríguez (MPMR), Los Hijos de Mafalda, Construyendo Socialismo (CS) y Todos a La Moneda (TALM) Santiago.80",
      birthday: "25 de octubre de 1951",
      political_party: "Partido Comunista Chileno",
      image:"http://www.elclarin.cl/web/images/stories/2017/septiembre/Eduardoartesmedios-752x440.jpg",
      partyImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Partido_Comunista_de_Chile.svg/1200px-Partido_Comunista_de_Chile.svg.png",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    candidatesData.push({
      name: "Alejando Navarro",
      slogan: "Slogan",
      bio: "En noviembre de 2016, aceptó la solicitud de su partido de ser precandidato para una eventual primaria del naciente Frente Amplio.82​ El 18 de enero, el diputado Gabriel Boric y otros personeros de la coalición dieron un ultimátum al partido País de retirar la precandidatura de Navarro, de lo contrario debería retirarse del Frente,83​ tras lo cual País suspendió su participación en dicha coalición.84​ El 24 de marzo de 2017, Navarro anunció su candidatura presidencial, respaldado por el partido País.",
      birthday: "20 de noviembre de 1958",
      political_party: "País",
      image:"http://d2vpb0i3hb2k8a.cloudfront.net/wp-content/uploads/sites/7/2015/09/A_UNO_478302_2cb92_816x544-1.jpg",
      partyImage:"https://upload.wikimedia.org/wikipedia/commons/1/14/Pais_partido.png",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return queryInterface.bulkInsert('Candidates', candidatesData);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Candidates', null, {});

  },
};
