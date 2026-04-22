// HOMEWORK — SIMPLE CONTACT CARD
// -----------------------------------------------

// STEP 1: Create an array called contacts.
//         It should contain at least 2 objects.

// STEP 2: Each contact object needs:
//         name (string)
//         phone (string or number)
//         isFavorite (boolean)

// STEP 3: Log the total number of contacts.

// STEP 4: Log the name of the first contact.

// STEP 5: Update one contact’s isFavorite value.

// STEP 6: Add (push) a new contact object.

// STEP 7: Log the updated contacts array.

const contacts = [nat, navid];

const nat = {
    name: "Nat",
    phone: "360-889-8976",
    isFavorite: false,
};

const navid = {
    name: "Navid",
    phone: "360-334-4675",
    isFavorite: true,
};

console.log("Total Contacts:", contacts.length);

console.log("First Contact Name:", contacts[0].name);

nat.isFavorite = true;

contacts.push({
    name: "Neftaly",
    phone: "357-876-4743",
    isFavorite: false,
});

console.log("Updated Contacts Array:", contacts);
