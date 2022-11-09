<script>
export default {
    props: {
        modelValue: { type: String, default: "" },
    },
    emits: ["submit", "update:modelValue"],
    methods: {
        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value);
        },
        submit() {
            this.$emit("submit");
        },
    },
};
</script>
<!-- <template>
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Nhập thông tin cần tìm" :value="modelValue"
            @input="updateModelValue" @keyup.enter="submit" />
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="submit">
                <i class="fas fa-search"></i> Tìm kiếm
            </button>
        </div>
    </div>
    <form role="search" method="POST" class="search-form justify-content-end" action="/search_admin" name="search-form">
        <label>
            <input class="form-control justify-content-en" type="search" placeholder="Search" aria-label="Search" value=""
                name="search_admin">
        </label>
    </form>
</template> -->
<template>
    <div class="col-5 d-flex justify-content-center input-search">
        <label class="">
            <input class="form-control " type="search" placeholder="Search" aria-label="Search" :value="modelValue"
            @input="updateModelValue"
            @keyup.enter="submit"
                name="search_admin">
                
        </label>
    
    </div>
    <!-- <div class="input-group col-3 d-flex justify-content-center input-search ">
        <input type="text" class="form-control" placeholder="Search" :value="modelValue"
            @input="updateModelValue" @keyup.enter="submit">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="submit">
                <i class="fas fa-search"></i>Tìm kiếm
            </button>
        </div>
    
    </div> -->
</template>