<template>
    <div class="form-floating mb-3">
        <!-- <input :type="type" class="form-control" :id="id" :name="name" placeholder="name@example.com"> -->
        <input
            :type="type"
            :name="name"
            :placeholder="placeholder"
            :required="required"
            :min="min"
            :max="max"
            :value="modelValue"
            :autocomplete="name + '-new'"
            @input="$emit('update:modelValue', $event.target.value)"
            class="form-control">
        <label for="floatingInput">{{label}}</label>

    </div>
</template>

<script>
export default {
    name: 'TextInput',
    props: {
        name: String,
        type: String,
        label: String,
        placeholder: String,
        required: String,
        min: String,
        max: String,
        modelValue: String,
        // help: String,
    },
}
</script>