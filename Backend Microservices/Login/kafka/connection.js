var kafka = require('kafka-node');

function ConnectionProvider() {
    this.getConsumer = function (topic_name) {

        this.client = new kafka.KafkaClient("localhost:2181");
        this.kafkaConsumerConnection = new kafka.Consumer(this.client, [{ topic: topic_name }]);
        this.client.on('ready', function () { console.log('Client ready') })

        return this.kafkaConsumerConnection;
    };

    //Code will be executed when we start Producer
    this.getProducer = function () {
        if (!this.kafkaProducerConnection) {
            this.client = new kafka.KafkaClient("localhost:2181");
            var HighLevelProducer = kafka.HighLevelProducer;
            this.kafkaProducerConnection = new HighLevelProducer(this.client);
            this.kafkaConnection = new kafka.Producer(this.client);
            console.log('Producer ready');
        }
        return this.kafkaProducerConnection;
    };
}
exports = module.exports = new ConnectionProvider;