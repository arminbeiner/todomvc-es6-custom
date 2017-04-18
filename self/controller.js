/**
 * Created by Armin on 18.04.2017.
 */
'use strict'
export default class{
    constructor($doc){
        let $input = $doc.querySelector("#new-todo")
        $input.addEventListener("change", this.onChangeInput)

    }

    onChangeInput(ev){
        console.log(ev.target.value)
    }
}