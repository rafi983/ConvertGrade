const confirm_btn = document.getElementById("confirm_btn");

confirm_btn.addEventListener("click", (e) => {
  e.preventDefault();
  convert_to_grade("bangla_input", "bangla_grade", "get_bangla_gpa");
  convert_to_grade("english_input", "english_grade", "get_english_gpa");
  convert_to_grade("ict_input", "get_ict_grade", "get_ict_gpa");
  convert_to_grade(
    "get_phy_acco_log_input",
    "get_phy_acco_log_grade",
    "get_phy_acco_log_gpa"
  );
  convert_to_grade(
    "get_che_bus_geo_input",
    "get_che_bus_geo_grade",
    "get_che_bus_geo_gpa"
  );
  convert_to_grade(
    "get_math_fin_civic_input",
    "get_math_fin_civic_grade",
    "get_math_fin_civic_gpa"
  );
  convert_to_grade(
    "get_bio_pro_soc_input",
    "get_bio_pro_soc_grade",
    "get_bio_pro_soc_gpa"
  );
  convert_to_grade("get_other_input", "get_other_grade", "get_other_gpa");
});

const convert_to_grade = (id, id2, id3) => {
  let get_id = document.getElementById(id).value;
  let get_grade = document.getElementById(id2);
  let get_gpa = document.getElementById(id3);

  if (get_id < 0) {
    alert("Your Number Should Not Be Negative. Please Enter Positive Number");
  } else if (get_id.length == 0) {
  } else if (get_id <= 32) {
    get_grade.innerHTML = "F";
    get_gpa.innerHTML = "0.00";
  } else if (get_id >= 33 && get_id <= 39) {
    get_grade.innerHTML = "D";
    get_gpa.innerHTML = "1.00";
  } else if (get_id >= 40 && get_id <= 49) {
    get_grade.innerHTML = "C";
    get_gpa.innerHTML = "2.00";
  } else if (get_id >= 50 && get_id <= 59) {
    get_grade.innerHTML = "B";
    get_gpa.innerHTML = "3.00";
  } else if (get_id >= 60 && get_id <= 69) {
    get_grade.innerHTML = "A-";
    get_gpa.innerHTML = "3.50";
  } else if (get_id >= 70 && get_id <= 79) {
    get_grade.innerHTML = "A";
    get_gpa.innerHTML = "4.00";
  } else if (get_id >= 80 && get_id <= 100) {
    get_grade.innerHTML = "A+ ";
    get_gpa.innerHTML = "5.00";
  } else if (get_id > 100) {
    alert(`Your number should be less than 100 OR equal to 100`);
  }
};
