<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'
import type { CreateStoreInput } from '~/schemas'
import { createStoreSchema } from '~/schemas'

const store = useStoreModal()

const { mutate, isPending } = useCreateStore()

const state = reactive<Partial<CreateStoreInput>>({
  name: undefined,
})

async function onSubmit(event: FormSubmitEvent<CreateStoreInput>) {
  mutate(event.data)
}
</script>

<template>
  <Modal
    title="Create Store"
    description="Add a new store to manage products and categories"
    :open="store.open"
    @close="store.onClose"
  >
    <div>
      <div class="space-y-4 py-2 pb-4">
        <UForm
          :schema="createStoreSchema"
          :state="state"
          :disabled="isPending"
          @submit="onSubmit"
        >
          <UFormField label="Name" name="name">
            <UInput v-model="state.name" class="w-full" />
          </UFormField>

          <div class="pt-6 space-x-2 flex items-center justify-end">
            <UButton variant="outline" type="button" @click="store.onClose">
              Cancel
            </UButton>
            <UButton type="submit" :disabled="isPending">
              Submit
            </UButton>
          </div>
        </UForm>
      </div>
    </div>
  </Modal>
</template>
