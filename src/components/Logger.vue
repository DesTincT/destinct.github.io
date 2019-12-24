<template>
  <v-container>
    <v-row class="mb-4">
      <v-btn class="mr-4" large color="primary" outlined @click="onClick(1)"
        >Button 1</v-btn
      >
      <v-btn class="mr-4" large color="primary" outlined @click="onClick(2)"
        >Button 2</v-btn
      >
      <v-btn class="mr-4" large color="primary" outlined @click="onClick(3)"
        >Button 3</v-btn
      >
    </v-row>
    <v-row>
      <v-textarea
        solo
        label="Logs"
        readonly
        auto-grow
        :value="formattedLogs"
        :loading="isLoading"
      ></v-textarea>
    </v-row>
    <v-row justify="end">
      <v-btn large color="secondary" @click="logs = []">RESET</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Logger",

  data: () => ({
    logs: [],
    isLoading: false,
    timeouts: [],
    promises: []
  }),

  computed: {
    formattedLogs() {
      return this.logs.join("\n");
    }
  },

  methods: {
    /**
     * Метод форматирования даты
     * @param  {Object} date new Date()
     * @return {String} строка с временем и датой
     */
    formatDate(date) {
      return date.toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    },

    /**
     * Формирует строку для вывода
     * @param  {Object} clickDate Date()
     * @param  {Object} logDate   Date()
     * @param  {Number} num       номер кнопки
     * @param  {Number} timeout   таймаут в сек.
     * @return {String}           строка лога
     */
    printString(clickDate, logDate, num, timeout) {
      return `${this.formatDate(
        logDate
      )}: Нажата кнопка ${num}, задержка ${timeout} сек., время нажатия ${this.formatDate(
        clickDate
      )}`;
    },

    /**
     * Обработчик клика по кнопке
     * @param  {Number} btnNumber номер кнопки
     */
    onClick(btnNumber) {
      let timeout = Math.floor(Math.random() * 10) + 1;
      let clickDate = new Date();
      this.isLoading = true;

      setTimeout(() => {
        let logDate = new Date();
        let log = this.printString(clickDate, logDate, btnNumber, timeout);

        this.logs.push(log);

        /**
         * Убираем прогрессбар при последнем выводе строки
         * @param  {[type]} this.timeouts.length [description]
         * @return {[type]}                      [description]
         */
        if (this.timeouts.length === 1) {
          this.isLoading = false;
        }

        this.timeouts.splice(this.timeouts.indexOf(timeoutIndex), 1);
      });

      let timeoutIndex = this.timeouts.push(timeoutIndex);
    },

    onClickDifficult() {}
  }
};
</script>
