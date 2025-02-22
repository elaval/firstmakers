makersTempDict = {

/*
    Special characters: (see <http://0xcc.net/jsescape/>)

    Ä, ä   \u00c4, \u00e4
    Ö, ö   \u00d6, \u00f6
    Ü, ü   \u00dc, \u00fc
    ß      \u00df
*/
    // primitive blocks:

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.

        For example:

            'say %s for %n secs'

        can currently not be changed into

            'say %n secs long %s'

        and still work as intended.

        Similarly

            'point towards %dst'

        cannot be changed into

            'point towards %cst'

        without breaking its functionality.
    */

    // menus:
    
    'About Snap!...':
        'Acerca de Snap ...',

    'Snap! reference manual.':
        'Manual de referencia de Snap',

    'Snap4Arduino website':
        'Sitio web de Snap4Arduino',

    'Download Snap! source':
        'Descargar código fuente de Snap',

    'Snap4Arduino repository':
        'Repositorio de Snap4Arduino',

    'Libraries...':
        'Librerías...',

    'Load examples...':
        'Cargar ejemplos...',

    'Load example':
        'Cargar ejemplo',

    'Blink (Turn on/off led)':
        'Blink (Prender/apagar luz)', 

    'Test FirstMakers Board':
        'Test de tarjeta FirstMakers', 

    'FirstMakers v1.0 compatible':
        'Compatible con FirstMakers v1.0', 

    'Zoom blocks...':
        'Zoom en bloques...',

    'Stage size...':
        'Tamaño del escenario ...',

    'Plain prototype labels':
        'Etiquetas de prototipos planas',

    'Turbo mode':
        'Modo turbo',

    'Flat design':
        'Diseño plano',

    'Prefer smooth animations':
        'Preferir animaciones suaves',

    'Flat line ends':
        'Fin de líneas plano',

    'Codification support':
        'Apoyo en la codificación',

    'Makers basic mode':
        'Makers en modo básico',

    // mensajes:

    'Opening project...':
        'Abriendo el proyecto...',

    'Untitled':
        'Sin título',


    // grupos de bloques:

    'Utilities':
        'Utilidades',

    // makers:

    
    'turn on led %ledcolor':
        'prender led %ledcolor',

    'turn off led %ledcolor':
        'apagar led %ledcolor',

    'white (w)' : 
        'blanco (w)',    

    'w' : 
        'w',

    'red (r)' : 
        'rojo (r)',

    'yellow (y)' : 
        'amarillo (y)',

    'green (g)' : 
        'verde (g)',

    'buzzer at %buzzerval':
        'bocina en %buzzerval',

    'buzzer on':
        'prender bocina',

    'buzzer off':
        'apagar bocina',

    'temperature':
        'temperatura',

    'light':
        'luz',

    'sound':
        'sonido',

    'humidity':
        'humedad',

    'infrared':
        'infrarojo',

    'potentiometer':
        'potenciómetro',

    'switch':
        'botón',

    'turn on pin %actuatorPin':
        'prender pin %actuatorPin',

    'turn off pin %actuatorPin':
        'apagar pin %actuatorPin',

    'set pwm %pwmPin to %pwmValue':
        'fijar pwm %pwmPin en %pwmValue',

    'read analog %sensorPin':
        'leer pin análogo %sensorPin',

    'read digital %digitalPin':
        'leer pin digital %digitalPin',

    'Authorize Twitter Account':
        'Autorizar cuenta Twitter',

    'send Tweet %s':
        'enviar Tweet %s',

    'temperature in %s': 
        'temperatura en %s',

    'xively read datastream %s from feed %s with key %s': 
        'xively leer datastream %s de feed %s con clave %s',

    'thingspeak read field %s from channel %s with key %s': 
        'thingspeak leer campo %s de canal %s con clave %s',

    'thingspeak set value %s at field %s in channel %s with key %s': 
        'thingspeak fijar valor %s en campo %s para canal %s con clave %s',

    'Arduino not connected':
        'Arduino no está conectado',

    'Your local browser will be directed to\na Twitter Web page that will request\nauthorization for this App to send\nTweets and will give you a PIN number\n\n':
        'Su navegador local se dirigirá a una\npágina Web de Twitter que le solicitará\nautorización para que este programa envíe\nTweets, y le entregará un número de acceso(PIN)\n\n',

    'Type the PIN number here\n' :
        'Escriba el PIN acá\n',

    'PIN number you get from browser page' : 
        'PIN number obtenido en la página web',

    'Successful authorization for Twitter account':
        'Autorización exitosa para la cuenta Twitter',

    'You may now send tweets (on behalf of':
        'Ahora puedes enviar tweets (en nombre de',
    'uncheck to work with older versions of the board':'desmarcar para trabajar con las\nversiones antiguas',
    'check to work with version 2.0 of the board':'marcar para trabajar con la versión 2.0',
    'servo to %servoValue':'servo a %servoValue',
    'servo %digitalPin to %servoValue':'servo %digitalPin a %servoValue',
    'motor spin %motorSpinValue speed %motorSpeedValue': 'girar motor %motorSpinValue velocidad %motorSpeedValue',
    'turn on pin %actuatorPinV2':'encender pin %actuatorPinV2',
    'turn off pin %actuatorPinV2':'apagar pin %actuatorPinV2',
    'Invalid pin \n should be D0, D1 or D2':'Pin Inválido \n seleccione D0, D1 o D2',
    'Invalid pin \n should be D0 or D1':'Pin Inválido \n seleccione D0 o D1',
    'Invalid pin \n should be 3, 8, 9, 10, 11 or 12':'Pin inválido \n seleccione 3, 8, 9, 10, 11 o 12',
    'Invalid pin \n should be A0, A1, A2, A3, A4 or A5':'Pin inválido \n seleccione A0, A1, A2, A3, A4 o A5',
    'Go to initial position':'Ir a la posición inicial',
    'About Snap4Firstmakers':'Acerca de Snap4Firstmakers',
    'FirstMakers website':'Sitio Web FirstMakers',
    'Download source code':'Descargar código fuente',
    'About FirstMakers...':'Acerca de FirstMakers...',
    'About Snap4FirstMakers...':'Acerca de Snap4FirsMakers',
    'Contributions...':'Colaboradores...',
    'Contributors':'Colaboradores',
    'Snap4Firstmakers!\n\n Is a modification of Snap4Arduino Software for controlling FirstMakers Board':
    'Snap4Firstmakers!\n\n Es una modificación de Snap4Arduino para controlar la tarjeta FirstMakers',
    'Contributors\n\nErnesto Laval: MacOSX version, architectural decisions,\nseveral features and bugfixes, Spanish translation\nJose Saavedra: Hardware Desing\nEdison Delgado: Software engineering\n':'Colaboradores\n\nErnesto Laval: Version Mac OSX, Arquitectura,\nvarias características y correcciones de errores, Traducción Español\nJose Saavedra: Diseño de Hardware\nEdison Delgado: Ingeniero de Sofware\n',
    'set pwm %pwmPinV2 to %pwmValue':'fijar pwm %pwmPinV2 en %pwmValue',
    'read digital %actuatorPinV2':'leer pin digital %actuatorPinV2',
    'FirstMakers v2.0 compatible':'FirstMakers compatible v2.0',
    'any message':'cualquier mensaje',
    'when I am %interaction':'cuando objeto %interaction',
    'message':'mensaje',
    'pause all %pause':'pausar todos %pause',
    'stop %stopChoices':'detener %stopChoices',
    'stop %stopOthersChoices':'detener %stopOthersChoices',
    'this script':'este programa',
    'this block':'este bloque',
    'clicked':'clic',
    'dropped':'soltar',
    'pressed':'presionado',
    'mouse-entered':'ratón entrando',
    'mouse-departed':'ratón saliendo',
    'all but this script':'todos menos este programa',
    'other scripts in sprite':'otros programas en el sprite',
    'myself':'yo mismo',
    'create a clone of %cln':'crear un clon de %cln',
    'delete this clone':'borrar este clon',
    'when I start as a clone':'cuando empiezo como un clon',
    'brightness':'brillo',
    'negative':'negativo',
    'year':'año',
    'month':'mes',
    'date':'fecha',
    'day of week':'día de la semana',
    'hour':'hora',
    'minute':'minuto',
    'second':'segundo',
    'time in milliseconds':'tiempo en milisegundos',
    'current %dates':'actual %dates',
    'Save Project As...':'Guardar proyecto como...',
    'Select a sound from the media library':'Elegir un sonido desde la biblioteca de medios',
    'Select a costume from the media library':'Elegir un disfraz desde la biblioteca de medios',
    'find unused global custom blocks\nand remove their definitions':'',
    'show global custom block definitions as XML\nin a new browser window':'',
    'open a project':'Abre un proyecto',
    'New empty project':'Nuevo proyecto vacío',
    'Save project as XML file':'Guardar proyecto como archivo XML',
    'Exporting':'Guardando',
    'Exported!':'¡Guardado!',
    'Load FirstMakers examples':'Carga ejemplos FirstMakers',
    'paint a new sprite':'crear un nuevo sprite',
    'add a new Turtle sprite':'Añadir un nuevo sprite',
    'flip \u2194':'girar \u2194',
    'undo':'deshacer',
    'Brush size':'Tamaño del pincel',
    'grow':' + ',
    'shrink':' -- ',
    'flip \u2195':'girar \u2195',
    'Constrain proportions of shapes?\n(you can also hold shift)':'Restringir proporciones de formas ?\n(también se puede pulsar shift)',
    'line':'linea',
    'letter':'letra',
    'tab':'tabulación',
    'cr':'salto de linea',
    'whitespace':'espacio en blanco',
    'split %s by %delim':'separar %s por %delim',
    'turbo mode?':'¿en modo turbo?',
    'set turbo mode to %b':'modo turbo para %b',
    '%att of %spr':'%att de %spr',
    'Make a variable':'Crear una variable',
    'Import':'Importar',
    'sound':'sonido',
    'uncheck to advanced mode (more block options)':'desmarcar modo básico (más bloques)',
    'scripts pic...':'foto del código',
    'open a new window\nwith a picture of the stage':'abrir una nueva ventana\ncon una imagen del escenario',
    'clean up':
        'alinear bloques',
    'check to hide (+) symbols\nin block prototype labels':'',
    'check to prioritize\nscript execution':'marcar para priorizar\nla ejecución del programa',
    'check for alternative\nGUI design':'marcar para ver una\ninterfaz distinta',
        'check to disallow\nscript reentrance':
        '',
    'uncheck to allow\nscript reentrance':'',
    'uncheck for smooth\nscaling of vector costumes':'desmarcar para suavizar\nescalado de disfraces',
    'check to enable basic mode (reduced block options)':'marca para habilitar modo básico (menos bloques)',
    'uncheck to always show (+) symbols\nin block prototype labels':'',
    'uncheck to run scripts\nat normal speed':'desmarca para ejecutar programas\nen prioridad normal',
    'uncheck for default\nGUI design':'desmarcar para ver diseño por omisión',
    'uncheck for greater speed\nat variable frame rates':'desmarca para mejorar el rendimiento',
    'check for smooth, predictable\nanimations across computers':'marca para suavizar\n animaciones',
    'uncheck for round ends of lines':'',
    'check for flat ends of lines':'',
    'undrop':'deshacer bloque',
    'undo the last\nblock drop\nin this pane':'deshacer último\nbloque arrastrado\nen este panel',
    'open a new window\nwith a picture of all scripts':'abrir una nueva ventana\ncon una foto del código',
    'find blocks...':'encontrar bloques...',
    'hide primitives':'ocultar primitivos',
    'show primitives':'mostrar primitivos',
    'Stage':'Escenario',
    'Sprite':'Objeto',
    'import...':'importar...',
    'JavaScript function ( %mult%s ) { %code }':'función JavaScript ( %mult%s ) { %code }',
    'Stage size':
        'Tamaño del escenario',
    'Stage width':'Ancho',
    'Stage height':'Largo',
    'Zoom blocks':'Zoom de bloques',
    'build':'construye',
    'your own':'tus propios',
    'blocks':'bloques',
    'pic...':'foto...',
    'Paint Editor':'Editor',
    'Set the rotation center':'configurar centro de rotación',
    'Eraser tool':'Herramienta borrar',
    'Paintbrush tool\n(free draw)':
		'Herramienta Lápiz',
	'Stroked Rectangle\n(shift: square)':
		'Dibujar rectángulo',
	'Stroked Ellipse\n(shift: circle)':
		'Dibujar Elipse',
	'Line tool\n(shift: vertical/horizontal)':
		'Herramienta Línea\n(shift: vertical/horizontal)',
	'Filled Rectangle\n(shift: square)':
		'Rectángulo relleno\n(shift: rectángulo)',
	'Filled Ellipse\n(shift: circle)':
		'Elipse relleno\n(shift: circulo)',
	'Fill a region':
		'Herramienta de relleno',
    'Pipette tool\n(pick a color anywhere)':
		'Herramineta cuentagotas\n(obtiene un color)',
    '\n\nIt seems that someone pulled the cable!':
        '\n\nParece que alguien desconectó el cable!',
    'select a port':'seleccione un puerto',
    'costumes tab help':
        'importar una foto de otro sitio Web o desde\n'
            + 'su computador arrastr\u00E1ndolo hasta aqu\u00ED',
    'Paint a new costume':'Pintar un nuevo disfraz',
    'Empty':'Vacío',
    'Image Exported!':'¡Imagen Guardada!',
    'map %cmdRing to %codeKind %code':'mapear %cmdRing de %codeKind %code',
    'map %codeListPart of %codeListKind to code %code':'mapear %codeListPart de %codeListKind al código %code',
    'save %imgsource as costume named %s':'guardar %imgsource como disfraz %s',
    'collection':'colección',
    'parameters':'parámetros',
    'map String to code %code':'mapear texto al código %code',
    'delete %shd':'borrar %shd',
    'get Twitter pin':'obtener Twitter pin',
    'set Twitter pin %s':'configurar Twitter pin %s',
    'move':'mover',
    'Sprite Exported!':'Sprite Guardado!',
    'Backgrounds':'Fondo Escenario',
    'Save As':'Guardar como',
    'temperature probe in %sensorPin' :'sonda temperatura en %sensorPin' ,
    'soil moisture in %sensorPin':'humedad suelo en %sensorPin',
    'Enter hostname or ip address:': 'Ingrese el Hostname o una direccion Ip:',
    'Network port':'Puerto remoto',
    'select a port': 'seleccione un puerto'

    
};

// Add attributes to original SnapTranslator.dict.es
for (var attrname in makersTempDict) { SnapTranslator.dict.es[attrname] = makersTempDict[attrname]; }

