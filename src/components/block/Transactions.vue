<template>
  <div v-if="transactions && transactions.length > 0">
    <h2 class="text-2xl mb-5 md:mb-6 px-5 sm:hidden text-theme-text-primary">{{ $t("Transactions") }}</h2>
    <section class="page-section py-5 md:py-10">
      <div class="hidden sm:block">
        <table-transactions :transactions="transactions" />
      </div>
      <div class="sm:hidden">
        <table-transactions-mobile :transactions="transactions" />
      </div>
      <div class="mx-5 sm:mx-10 mt-5 md:mt-10 flex flex-wrap" v-if="transactions.length >= 25">
        <router-link :to="{ name: 'block-transactions', params: { block: this.block.id, page: 2 } }" tag="button" class="show-more-button">
          {{ $t("Show more") }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
import TransactionService from '@/services/transaction'

export default {
  props: {
    block: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    transactions: null
  }),

  watch: {
    block() {
      this.resetTransactions()
      this.getTransactions()
    }
  },

  methods: {
    resetTransactions() {
      this.transactions = null
    },

    async getTransactions () {
      if (!this.block.id) return

      if (this.block.transactions) {
        const { meta, data } = await TransactionService.byBlock(this.block.id)
        this.transactions = data
      }
    }
  }
}
</script>
