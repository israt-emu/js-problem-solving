const friends = ["Rimu", "woishy", "Akash", "Ravina", "Tushar-imran", "Elora-toufa"];
let largestName = friends[0];
for(const friend of friends){
    if(friend.length > largestName.length){
        largestName = friend;
    }
}
console.log("My friend", largestName, "has largest name of my friends group");