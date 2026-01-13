<?php
require_once "dbutils.php";
$db = conectarDB();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
</head>
<body>
    <h1>Gestion de Videojuegos</h1>
    <ul>
    <li><a href="insercion.php">Gestionar PLAYERS</a></li> 
    <li><a href="modificacion.php">Gestionar GAMES</a></li>
    <li><a href="borrado.php">Gestionar PARTIDAS</a></li>
    </ul>

    <h2>Resumen de Control</h2>
    <p>Numero Partidas: <?php echo contarEntidad($db, 'PARTIDAS'); ?></p>
    <p>Numero Jugadores: <?php echo contarEntidad($db, 'PLAYERS'); ?></p>
    <p>Numero Games: <?php echo contarEntidad($db, 'GAMES'); ?></p>

    <h3>Estadísticas de Actividad</h3>
    <p>Jugadores con 2 partidas: <?php echo contarJugadoresPorPartidas($db, 2); ?></p>
    <p>Jugadores con 3 partidas: <?php echo contarJugadoresPorPartidas($db, 3); ?></p>
    <p>Jugadores con más de 3 partidas: <?php echo contarJugadoresPorPartidas($db, 4, false); ?></p>
</body>
</html>