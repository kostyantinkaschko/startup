<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Form</title>
</head>
<body>
    <script>
        function saveLocalStorageOrder() {
            let nameOrder = document.querySelector("#nameOrder").value,
                companyNameOrder = document.querySelector("#companyNameOrder").value,
                messageOrder = document.querySelector("#messageOrder").value,
                emailOrder = document.querySelector("#emailOrder").value,
                basketItems = localStorage.getItem('basket') || '[]',
                emailRexExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                emailOrderCheck = emailRexExp.test(emailOrder)

            if (emailOrderCheck) {
                localStorage.setItem("nameOrder", nameOrder);
                localStorage.setItem("companyNameOrder", companyNameOrder)
                localStorage.setItem("messageOrder", messageOrder)
                localStorage.setItem("emailOrder", emailOrder)
                localStorage.setItem("basketItems", basketItems)
            } else {
                window.location.href = "../index.html"
            }
        }

        <?php if ($_SERVER["REQUEST_METHOD"] == "POST"): ?>
            saveLocalStorageOrder();
        <?php endif; ?>
    </script>

    <?php
    $servername = "localhost";
    $database = "startup";
    $username = "root";
    $password = "!L-fKdz@9TR6i*b";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nameOrder = $_POST["nameOrder"];
        $companyNameOrder = $_POST["companyNameOrder"];
        $email = $_POST["emailOrder"];
        $message = $_POST["messageOrder"];
        $basketItems = $_POST["basketItems"];

        try {
            $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $stmt = $conn->prepare("INSERT INTO orders (name, email, message, companyNameOrder, basketItems) VALUES (:name, :email, :message, :companyNameOrder, :basketItems)");
            $stmt->bindParam(':name', $nameOrder);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':message', $message);
            $stmt->bindParam(':companyNameOrder', $companyNameOrder);
            $stmt->bindParam(':basketItems', $basketItems);
            $stmt->execute();

            header("Location: ../index.html");
            exit();
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
    ?>
</body>
</html>
