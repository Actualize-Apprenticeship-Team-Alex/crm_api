/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      leads: [],
      sorted_leads: [],
      time_format: "12/25/17",
      url: "https://www.google.com/",
      sort_by: "first_name",
      order: true
    },
    mounted: function() {
      $.get('/api/v1/leads.json').success(function(response) {
        console.log(this);
        this.leads = response;
        this.sorted_leads = response;
      }.bind(this));
    },
    methods: {
      moment: function(date) {
        return moment(date);
      },
      sort_by_setter: function(sort_by) {
        if (this.sort_by === sort_by) {
          this.order = !this.order;
        } else {
          this.order = true;
        }
        this.sort_by = sort_by;
        this.sorted_leads = this.sort_leads(this.leads);
      },
      compare_values: function() {
        return function(a, b) {
          if(!a.hasOwnProperty(this.sort_by) || !b.hasOwnProperty(this.sort_by)) {
              return 0; 
          }

          const varA = a[this.sort_by].toUpperCase();
          const varB = b[this.sort_by].toUpperCase();

          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          if (this.order) {
            return comparison;
          } else {
            return comparison * -1;
          }
        }.bind(this);
      },
      sort_leads: function(leads) {
        return leads.sort(this.compare_values());
      }
    },
    computed: {

    },
  });
});
