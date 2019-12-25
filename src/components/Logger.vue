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
        :loading="isProcessing"
      ></v-textarea>
    </v-row>
    <v-row justify="end">
      <v-btn large color="secondary" @click="reset">RESET</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Logger",

  data: () => ({
    logs: [],
    queue: [],
    timeoutList: [],
    isProcessing: false
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
     * Возвращает промис с таймаутом
     * @param  {Object} clickDate [description]
     * @param  {Number} timeout   [description]
     * @param  {Number} btnNumber [description]
     * @return {Promise}           [description]
     */
    getPromise(clickDate, timeout, btnNumber) {
      return new Promise(resolve => {
        let tIndex = setTimeout(() => {
          resolve(this.printString(clickDate, new Date(), btnNumber, timeout));
        }, timeout * 1000);

        this.timeoutList.push(tIndex);
      });
    },

    /**
     * Обработчик очереди промисов с таймаутами
     * @return {[type]} [description]
     */
    processQueue() {
      if (!this.queue.length) {
        return;
      }

      this.isProcessing = true;

      this.getPromise(...this.queue.shift()).then(result => {
        this.logs.push(result);

        if (this.queue.length) {
          this.processQueue();
        } else {
          this.isProcessing = false;
        }
      });
    },

    /**
     * Обработчик клика по кнопке
     * @param  {Number} btnNumber номер кнопки
     */
    onClick(btnNumber) {
      let timeout = Math.floor(Math.random() * 10) + 1;
      let clickDate = new Date();

      this.queue.push([clickDate, timeout, btnNumber]);

      if (!this.isProcessing) {
        this.processQueue();
      }
    },

    /**
     * Сбрасывает состояние очереди
     *
     */
    reset() {
      this.timeoutList.forEach(tIndex => {
        clearInterval(tIndex);
      });

      this.logs = [];
      this.queue = [];
      this.timeoutList = [];
      this.isProcessing = false;
    }
  }
};
</script>
