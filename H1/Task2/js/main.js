function task2() {
    this.displayImage = function () {
        document.write("<img src=\"https://source.unsplash.com/1600x900/?water\" alt=\"Random Water Image\">");
    }

    this.goToGoogle = function() {
        window.location.href = "https://www.google.by";
    }

    this.createDisplayHuman = function() {
        var human = new Human();
        console.log(human);
        console.log(Object.getOwnPropertyNames(human));
        var newDiv = document.createElement("pre");
        newDiv.innerHTML = "<strong>Human:</strong>\n" + human;
        document.body.appendChild(newDiv);
    }

    function Human() {
        this.firstname = "Andrew";
        this.lastname = "Milko";
        this.middlename = "Vladimirovich";
        this.job = "Programmer";
        this.yearsOfExperience = 1.5;

        this.toString = function() {
            return "First Name: " + this.firstname + "\n" + 
            "Last Name: " + this.lastname + "\n" + 
            "Middle Name: " + this.middlename + "\n" + 
            "Job: " + this.job + "\n" +
            "Experience (years): " + this.yearsOfExperience + "\n";
        }
    }
};

var task2 = new task2();