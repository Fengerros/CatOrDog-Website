const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
    const model = await tf.loadLayersModel('http://fenger.pl/zadania/model/model.json');
    if (model) {
        // use the model here
        const output = model.predict(input);
        // print the output
        console.log('output:');
        output.print();
    } else {
        console.log('Failed to load model');
    }
}

// make random input 256x256x3 image
const input = tf.randomNormal([1, 256, 256, 3]);

loadModel();