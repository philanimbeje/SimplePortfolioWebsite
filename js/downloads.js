import Confetti from 'confetti'


window.onload = function() {
    let confetti = new Confetti('btn');
    confetti.setCount(200);
    confetti.setSize(1.5);
    confetti.setPower(40);
    confetti.setFade(true);
    confetti.destroyTarget(false);
}