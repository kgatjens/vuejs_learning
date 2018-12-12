<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="item in items" :key="item.id">
            {{ item.title }} - $ {{ item.price }}
            <button @click="$emit('remove-from-cart',item)" class="btn badge badge-warning float-right">Remove</button>
        </li>
    </ul>
</template>
<script>
export default{
    props:['items']
}
</script>