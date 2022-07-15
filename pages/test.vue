<template>
    <div>
        <div class="border w-96">
            <Container orientation="vertical" @drop="onDrop">
                <Draggable v-for="item in items" :key="item.id">
                    <div class="border text-black p-4 my-2 bg-red-300 border-red-800">
                        {{ item.data }}
                    </div>
                </Draggable>
            </Container>
        </div>
    </div>
</template>

<script>
import { Container, Draggable } from 'vue3-smooth-dnd'
import { applyDrag, generateItems } from '~~/utils/helpers'

export default {
    components: { Container, Draggable },
    data() {
        return {
            items: generateItems(50, i => ({ id: i, data: 'Draggable ' + i })),
        }
    },
    methods: {
        onDrop(dropResult) {
            this.items = applyDrag(this.items, dropResult)
        },
    },
    render() {
        return h('div')
    },
}
</script>
