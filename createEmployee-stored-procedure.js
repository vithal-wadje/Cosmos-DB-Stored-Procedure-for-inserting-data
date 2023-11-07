function createEmployee(id, name, country, city, department, designation) {
    var context = getContext();
    var container = context.getCollection();
    var response = context.getResponse();

    // Constructing the employee data from individual parameters
    var employeeData = {
        "id": id,
        "Name": name,
        "Country": country,
        "City": city,
        "Department": department,
        "Designation": designation
    };

    // Insert the constructed document into the Employees container
    var accepted = container.createDocument(container.getSelfLink(),
        employeeData,
        function (err, doc) {
            if (err) throw new Error("Error while creating the document: " + err.message);
            response.setBody(doc.id);
        });

    // If the createDocument is not queued up, return an error message
    if (!accepted) throw new Error("The query was not accepted by the server.");
}

//created by vithal Wadje
