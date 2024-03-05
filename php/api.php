<?php
// Simulated database (replace with a real database connection)
$products = [
    ['id' => 1, 'name' => 'Product 1', 'price' => 20.00],
    ['id' => 2, 'name' => 'Product 2', 'price' => 30.00],
    ['id' => 3, 'name' => 'Product 3', 'price' => 25.00],
];

if ($_GET['action'] == 'get_products') {
    header('Content-Type: application/json');
    echo json_encode($products);
}
?>
