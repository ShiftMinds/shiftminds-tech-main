<template>
  <div class="careers">
    <section class="careers pb-0">
      <div class="container">
        <div class="section-title text-center mb-0">
          <h1 class="mb-3 mb-md-4">
            <span class="text-primary">Careers</span>
          </h1>
          <h2 class="w-75 mx-auto mb-3 mb-md-4">Explorer a career at NSJ Tech</h2>
          <p class="w-50 mx-auto mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quia
            accusamus dolor quisquam animi fugiat iure.
          </p>
        </div>
        <!-- <div class="text-center">
          <button type="submit" class="btn btn-primary btn-lg">
            Explore Open Positions
          </button>
        </div> -->
      </div>
    </section>

    <section class="careers">
      <div class="container">
        <div class="section-title">
          <div class="row g-2 g-lg-3">
            <div class="col-lg-8">
              <div class="input-group">
                <select v-model="location" class="form-select form-select-lg">
                  <option value="" disabled selected>Location</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                </select>
                <select v-model="division" class="form-select form-select-lg">
                  <option value="" disabled selected>Division</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                </select>
                <select v-model="workType" class="form-select form-select-lg">
                  <option value="" disabled selected>Work Type</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                </select>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Job Title"
                />
                <button type="submit" class="btn btn-primary btn-lg">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex position-relative">
          <div class="row g-3">
            <div class="col-md-6">
              <div class="card h-100">
                <div class="card-body p-3 p-md-4 p-lg-5">
                  <h5 class="text-dark fw-bold mb-3 mb-md-4">
                    Lorem ipsum, dolor sit amet
                  </h5>
                  <p class="mb-3 mb-md-4 mb-lg-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                    aliquid eos earum facilis fugiat nulla, molestiae quod ipsam placeat
                    natus illo magni quidem sit ratione ipsa ea consectetur praesentium
                    dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit aspernatur in, recusandae dignissimos inventore quam sint
                    soluta commodi unde vitae quae possimus ullam explicabo esse iusto
                    ipsa animi ducimus ...
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100">
                <div class="card-body p-3 p-md-4 p-lg-5">
                  <h5 class="text-dark fw-bold mb-3 mb-md-4">
                    Lorem ipsum, dolor sit amet
                  </h5>
                  <p class="mb-3 mb-md-4 mb-lg-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                    aliquid eos earum facilis fugiat nulla, molestiae quod ipsam placeat
                    natus illo magni quidem sit ratione ipsa ea consectetur praesentium
                    dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit aspernatur in, recusandae dignissimos inventore quam sint
                    soluta commodi unde vitae quae possimus ullam explicabo esse iusto
                    ipsa animi ducimus ...
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100">
                <div class="card-body p-3 p-md-4 p-lg-5">
                  <h5 class="text-dark fw-bold mb-3 mb-md-4">
                    Lorem ipsum, dolor sit amet
                  </h5>
                  <p class="mb-3 mb-md-4 mb-lg-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                    aliquid eos earum facilis fugiat nulla, molestiae quod ipsam placeat
                    natus illo magni quidem sit ratione ipsa ea consectetur praesentium
                    dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit aspernatur in, recusandae dignissimos inventore quam sint
                    soluta commodi unde vitae quae possimus ullam explicabo esse iusto
                    ipsa animi ducimus ...
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100">
                <div class="card-body p-3 p-md-4 p-lg-5">
                  <h5 class="text-dark fw-bold mb-3 mb-md-4">
                    Lorem ipsum, dolor sit amet
                  </h5>
                  <p class="mb-3 mb-md-4 mb-lg-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                    aliquid eos earum facilis fugiat nulla, molestiae quod ipsam placeat
                    natus illo magni quidem sit ratione ipsa ea consectetur praesentium
                    dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit aspernatur in, recusandae dignissimos inventore quam sint
                    soluta commodi unde vitae quae possimus ullam explicabo esse iusto
                    ipsa animi ducimus ...
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "@/assets/css/careers.css";

export default {
  data: () => ({
    location: "",
    division: "",
    workType: "",
  }),

  watch: {
    location() {
      this.changeQueryString();
    },
    division() {
      this.changeQueryString();
    },
    workType() {
      this.changeQueryString();
    },
  },
  methods: {
    changeQueryString() {
      this.$router.replace({
        query: {
          location: this.location.toLowerCase() || undefined,
          division: this.division.toLowerCase() || undefined,
          work_type: this.workType.toLowerCase() || undefined,
        },
      });
    },
  },
};
</script>
