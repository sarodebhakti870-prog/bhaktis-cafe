/* =========================================
   BHAKTI'S CAFE
   CRUD ORDER MANAGEMENT SYSTEM
========================================= */


/* =========================================
   MENU DATA
========================================= */

let menu = JSON.parse(
    localStorage.getItem("bhaktiMenu")
) || [

    /* BURGERS */

    {
        id: 1,
        name: "Classic Veg Burger",
        price: 129,
        category: "Veg",
        type: "Burger",
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 2,
        name: "Cheese Burst Burger",
        price: 179,
        category: "Veg",
        type: "Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 3,
        name: "Chicken Burger",
        price: 199,
        category: "Non-Veg",
        type: "Burger",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80"
    },


    /* PIZZA */

    {
        id: 4,
        name: "Margherita Pizza",
        price: 199,
        category: "Veg",
        type: "Pizza",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 5,
        name: "Paneer Tikka Pizza",
        price: 279,
        category: "Veg",
        type: "Pizza",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 6,
        name: "Chicken Pizza",
        price: 299,
        category: "Non-Veg",
        type: "Pizza",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
    },


    /* PASTA */

    {
        id: 7,
        name: "White Sauce Pasta",
        price: 199,
        category: "Veg",
        type: "Pasta",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 8,
        name: "Red Sauce Pasta",
        price: 179,
        category: "Veg",
        type: "Pasta",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 9,
        name: "Chicken Pasta",
        price: 229,
        category: "Non-Veg",
        type: "Pasta",
        image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80"
    },


    /* INDIAN FOOD */

    {
        id: 10,
        name: "Paneer Butter Masala",
        price: 219,
        category: "Veg",
        type: "Indian",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 11,
        name: "Veg Biryani",
        price: 179,
        category: "Veg",
        type: "Indian",
        image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d4e24?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 12,
        name: "Chicken Biryani",
        price: 229,
        category: "Non-Veg",
        type: "Indian",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 13,
        name: "Chicken Peri Peri",
        price: 249,
        category: "Non-Veg",
        type: "Indian",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80"
    },


    /* SNACKS */

    {
        id: 14,
        name: "Grilled Cheese Sandwich",
        price: 149,
        category: "Veg",
        type: "Snacks",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 15,
        name: "Paneer Wrap",
        price: 159,
        category: "Veg",
        type: "Snacks",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 16,
        name: "Peri Peri Fries",
        price: 119,
        category: "Veg",
        type: "Snacks",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"
    },


    /* DRINKS */

    {
        id: 17,
        name: "Classic Coffee",
        price: 59,
        category: "Drinks",
        type: "Drinks",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 18,
        name: "Cold Coffee",
        price: 99,
        category: "Drinks",
        type: "Drinks",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 19,
        name: "Chocolate Milkshake",
        price: 129,
        category: "Drinks",
        type: "Drinks",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 20,
        name: "Strawberry Milkshake",
        price: 129,
        category: "Drinks",
        type: "Drinks",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 21,
        name: "Fresh Orange Juice",
        price: 89,
        category: "Drinks",
        type: "Drinks",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 22,
        name: "Mango Shake",
        price: 119,
        category: "Drinks",
        type: "Drinks",
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80"
    },


    /* DESSERTS */

    {
        id: 23,
        name: "Chocolate Brownie",
        price: 109,
        category: "Dessert",
        type: "Dessert",
        image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 24,
        name: "Brownie With Ice Cream",
        price: 169,
        category: "Dessert",
        type: "Dessert",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 25,
        name: "Chocolate Waffle",
        price: 149,
        category: "Dessert",
        type: "Dessert",
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 26,
        name: "Chocolate Cake",
        price: 129,
        category: "Dessert",
        type: "Dessert",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
    },


    /* EXTRA DISHES */

    {
        id: 27,
        name: "Veg Momos",
        price: 119,
        category: "Veg",
        type: "Snacks",
        image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 28,
        name: "Chicken Momos",
        price: 149,
        category: "Non-Veg",
        type: "Snacks",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 29,
        name: "Masala Dosa",
        price: 129,
        category: "Veg",
        type: "Indian",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 30,
        name: "Cheese Nachos",
        price: 139,
        category: "Veg",
        type: "Snacks",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80"
    }

];


/* =========================================
   ORDERS
========================================= */

let orders = JSON.parse(
    localStorage.getItem("bhaktiOrders")
) || [];


/* =========================================
   VARIABLES
========================================= */

let currentUser = "";

let cart = [];

let currentFilter = "All";


/* =========================================
   SAVE DATA
========================================= */

function saveData() {

    localStorage.setItem(
        "bhaktiMenu",
        JSON.stringify(menu)
    );

    localStorage.setItem(
        "bhaktiOrders",
        JSON.stringify(orders)
    );
}


/* =========================================
   LOGIN
========================================= */

function login() {

    let username =
        document.getElementById("username")
        .value.trim();

    let role =
        document.getElementById("role")
        .value;

    if (username === "") {

        alert("Please enter your name.");

        return;
    }

    currentUser = username;

    document
        .querySelector(".login-section")
        .classList.add("hidden");


    if (role === "customer") {

        document
            .getElementById("customerPanel")
            .classList.remove("hidden");

        document
            .getElementById("customerName")
            .innerText = username;

        displayMenu();

        displayCart();

        displayCustomerOrders();

    }

    else {

        document
            .getElementById("operatorPanel")
            .classList.remove("hidden");

        displayAdminMenu();

        displayAllOrders();

        updateStatistics();
    }

}


/* =========================================
   LOGOUT
========================================= */

function logout() {

    currentUser = "";

    cart = [];

    document
        .getElementById("customerPanel")
        .classList.add("hidden");

    document
        .getElementById("operatorPanel")
        .classList.add("hidden");

    document
        .querySelector(".login-section")
        .classList.remove("hidden");

    document
        .getElementById("username")
        .value = "";

    window.scrollTo(0, 0);
}


/* =========================================
   DISPLAY MENU
========================================= */

function displayMenu() {

    let container =
        document.getElementById("menuContainer");

    container.innerHTML = "";

    let searchValue =
        document
        .getElementById("search")
        .value
        .toLowerCase();


    let filtered = menu.filter(item => {

        let matchesCategory =
            currentFilter === "All" ||
            item.category === currentFilter ||
            item.type === currentFilter;

        let matchesSearch =
            item.name
            .toLowerCase()
            .includes(searchValue);

        return matchesCategory && matchesSearch;

    });


    if (filtered.length === 0) {

        container.innerHTML =
            "<p>No food found.</p>";

        return;
    }


    filtered.forEach(item => {

        container.innerHTML += `

            <div class="food-card">

                <img
                    class="food-image"
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div class="food-info">

                    <span class="tag">
                        ${item.category}
                    </span>

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        Freshly prepared at
                        Bhakti's Cafe.
                    </p>

                    <div class="food-bottom">

                        <span class="price">
                            ₹${item.price}
                        </span>

                        <button
                            onclick="addToCart(${item.id})">
                            Add
                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}


/* =========================================
   FILTER
========================================= */

function filterMenu(category) {

    currentFilter = category;

    displayMenu();

}


/* =========================================
   SEARCH
========================================= */

function searchMenu() {

    displayMenu();

}


/* =========================================
   ADD TO CART
========================================= */

function addToCart(id) {

    let item =
        menu.find(item => item.id === id);

    if (!item) return;

    cart.push(item);

    displayCart();

}


/* =========================================
   DISPLAY CART
========================================= */

function displayCart() {

    let container =
        document.getElementById("cartContainer");

    let totalElement =
        document.getElementById("cartTotal");

    container.innerHTML = "";

    let total = 0;


    if (cart.length === 0) {

        container.innerHTML =
            "<p>Your cart is empty.</p>";

        totalElement.innerText = "0";

        return;
    }


    cart.forEach((item, index) => {

        total += Number(item.price);

        container.innerHTML += `

            <div class="cart-item">

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <br>

                    ₹${item.price}

                </div>

                <button
                    class="delete-btn"
                    onclick="removeFromCart(${index})">
                    Remove
                </button>

            </div>

        `;

    });


    totalElement.innerText = total;

}


/* =========================================
   REMOVE FROM CART
========================================= */

function removeFromCart(index) {

    cart.splice(index, 1);

    displayCart();

}


/* =========================================
   PLACE ORDER
========================================= */

function placeOrder() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    let total =
        cart.reduce(
            (sum, item) =>
                sum + Number(item.price),
            0
        );


    let order = {

        id: Date.now(),

        customer: currentUser,

        items:
            cart.map(
                item => item.name
            ).join(", "),

        total: total,

        status: "Pending",

        date:
            new Date().toLocaleString()

    };


    orders.push(order);

    saveData();


    cart = [];

    displayCart();

    displayCustomerOrders();


    alert(
        "🎉 Your order has been placed successfully!"
    );

}


/* =========================================
   CUSTOMER ORDERS
========================================= */

function displayCustomerOrders() {

    let container =
        document.getElementById(
            "customerOrders"
        );

    container.innerHTML = "";


    let myOrders =
        orders.filter(
            order =>
                order.customer === currentUser
        );


    if (myOrders.length === 0) {

        container.innerHTML =
            "<p>You have not placed any orders yet.</p>";

        return;
    }


    myOrders
        .slice()
        .reverse()
        .forEach(order => {

            container.innerHTML += `

                <div class="order-card">

                    <h3>
                        Order #${order.id}
                    </h3>

                    <p>
                        🍽️ ${order.items}
                    </p>

                    <p>
                        💰 Total:
                        ₹${order.total}
                    </p>

                    <p>
                        📅 ${order.date}
                    </p>

                    <p>
                        📌 Status:
                        <strong>
                            ${order.status}
                        </strong>
                    </p>

                </div>

            `;

        });

}


/* =========================================
   ADD MENU ITEM - CREATE
========================================= */

function addMenuItem() {

    let name =
        document.getElementById("newName")
        .value.trim();

    let price =
        document.getElementById("newPrice")
        .value;

    let category =
        document.getElementById("newCategory")
        .value;

    let image =
        document.getElementById("newImage")
        .value.trim();


    if (
        name === "" ||
        price === ""
    ) {

        alert("Please enter food name and price.");

        return;
    }


    if (image === "") {

        image =
            "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80";

    }


    let newItem = {

        id: Date.now(),

        name: name,

        price: Number(price),

        category: category,

        type: category,

        image: image

    };


    menu.push(newItem);

    saveData();

    displayAdminMenu();

    updateStatistics();


    document
        .getElementById("newName")
        .value = "";

    document
        .getElementById("newPrice")
        .value = "";

    document
        .getElementById("newImage")
        .value = "";


    alert(
        "✅ Menu item added successfully!"
    );

}


/* =========================================
   ADMIN MENU - READ
========================================= */

function displayAdminMenu() {

    let tbody =
        document.getElementById(
            "adminMenu"
        );

    tbody.innerHTML = "";


    menu.forEach(item => {

        tbody.innerHTML += `

            <tr>

                <td>
                    ${item.id}
                </td>

                <td>

                    <img
                        src="${item.image}"
                        class="table-img"
                    >

                </td>

                <td>
                    ${item.name}
                </td>

                <td>
                    ₹${item.price}
                </td>

                <td>
                    ${item.category}
                </td>

                <td>

                    <button
                        class="edit-btn"
                        onclick="editMenu(${item.id})">
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteMenu(${item.id})">
                        Delete
                    </button>

                </td>

            </tr>

        `;

    });

}


/* =========================================
   EDIT MENU - UPDATE
========================================= */

function editMenu(id) {

    let item =
        menu.find(
            item => item.id === id
        );


    if (!item) return;


    let newName =
        prompt(
            "Enter food name:",
            item.name
        );


    if (newName === null) return;


    let newPrice =
        prompt(
            "Enter price:",
            item.price
        );


    if (newPrice === null) return;


    let newCategory =
        prompt(
            "Enter category (Veg / Non-Veg / Drinks / Dessert):",
            item.category
        );


    if (newCategory === null) return;


    item.name = newName;

    item.price = Number(newPrice);

    item.category = newCategory;


    saveData();

    displayAdminMenu();

    updateStatistics();


    alert(
        "✅ Menu item updated!"
    );

}


/* =========================================
   DELETE MENU - DELETE
========================================= */

function deleteMenu(id) {

    let confirmDelete =
        confirm(
            "Are you sure you want to delete this item?"
        );


    if (!confirmDelete) return;


    menu =
        menu.filter(
            item => item.id !== id
        );


    saveData();

    displayAdminMenu();

    updateStatistics();


    alert(
        "🗑️ Menu item deleted!"
    );

}


/* =========================================
   DISPLAY ALL ORDERS
========================================= */

function displayAllOrders() {

    let tbody =
        document.getElementById(
            "allOrders"
        );

    tbody.innerHTML = "";


    if (orders.length === 0) {

        tbody.innerHTML = `

            <tr>

                <td colspan="6">
                    No customer orders yet.
                </td>

            </tr>

        `;

        return;
    }


    orders
        .slice()
        .reverse()
        .forEach(order => {

            tbody.innerHTML += `

                <tr>

                    <td>
                        ${order.id}
                    </td>

                    <td>
                        ${order.customer}
                    </td>

                    <td>
                        ${order.items}
                    </td>

                    <td>
                        ₹${order.total}
                    </td>

                    <td>

                        <select
                            onchange="
                                changeStatus(
                                    ${order.id},
                                    this.value
                                )
                            ">

                            <option
                                value="Pending"
                                ${order.status === "Pending"
                                    ? "selected"
                                    : ""}>
                                Pending
                            </option>

                            <option
                                value="Preparing"
                                ${order.status === "Preparing"
                                    ? "selected"
                                    : ""}>
                                Preparing
                            </option>

                            <option
                                value="Ready"
                                ${order.status === "Ready"
                                    ? "selected"
                                    : ""}>
                                Ready
                            </option>

                            <option
                                value="Completed"
                                ${order.status === "Completed"
                                    ? "selected"
                                    : ""}>
                                Completed
                            </option>

                        </select>

                    </td>

                    <td>

                        <button
                            class="delete-btn"
                            onclick="
                                deleteOrder(
                                    ${order.id}
                                )
                            ">
                            Delete
                        </button>

                    </td>

                </tr>

            `;

        });

}


/* =========================================
   CHANGE ORDER STATUS
========================================= */

function changeStatus(id, status) {

    let order =
        orders.find(
            order => order.id === id
        );


    if (!order) return;


    order.status = status;

    saveData();

    displayAllOrders();


}


/* =========================================
   DELETE ORDER
========================================= */

function deleteOrder(id) {

    if (
        !confirm(
            "Delete this customer order?"
        )
    ) {

        return;
    }


    orders =
        orders.filter(
            order => order.id !== id
        );


    saveData();

    displayAllOrders();

    updateStatistics();

}


/* =========================================
   STATISTICS
========================================= */

function updateStatistics() {

    document.getElementById(
        "totalMenu"
    ).innerText = menu.length;


    document.getElementById(
        "totalOrders"
    ).innerText = orders.length;


    let sales =
        orders.reduce(
            (sum, order) =>
                sum + Number(order.total),
            0
        );


    document.getElementById(
        "totalSales"
    ).innerText = sales;

}