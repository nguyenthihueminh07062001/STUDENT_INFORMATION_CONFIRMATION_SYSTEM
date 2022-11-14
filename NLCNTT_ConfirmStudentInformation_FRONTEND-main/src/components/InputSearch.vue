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
<template>
    <div class="col-5 d-flex justify-content-center input-search">
        <label class="">
            <input class="form-control " type="search" placeholder="Search" aria-label="Search" :value="modelValue"
                @input="updateModelValue" @keyup.enter="submit" name="search_admin">

        </label>

    </div>
</template>