d3.select ("body")
.append("ol")
.selectAll ("li")
.data(employees)
.enter()
.append("li")
.text(function(employee)
{return employee.lastName}
      )