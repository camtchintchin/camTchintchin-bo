import {ValidationProvider, ValidationObserver, extend,setInteractionMode} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules.js';
// @ts-ignore
import { messages } from 'vee-validate/dist/locale/fr.json';
import Vue from "vue";

for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation,
    message: messages[rule]
  });
}

extend('comparePassword', {
  params: ['target'],
  // @ts-ignore
  validate(value, { target }) {
    return value !== target;
  },
  message: 'Le nouveau mot de passe doit être différent de l\'ancien mot de passe !'
});
extend('confirmPassword', {
  params: ['target'],
  // @ts-ignore
  validate(value, { target }) {
    return value === target;
  },
  message: 'Les mots de passe ne correspondent pas !'
});


extend('montantModulo', {

  // @ts-ignore
  validate(value) {

    return parseInt(value.replaceAll(" ","")) %100 === 0;
  },
  message: 'Le Montant doit etre un multiple de 100'
});

extend('compareAccount', {
  params: ['target'],
  // @ts-ignore
  validate(value, { target }) {
    return value !== target;
  },
  message: 'Les numeros de compte doivent etre differents!'
});

extend('noConsChar', {
  // @ts-ignore

  validate(value) {

    const rule = /^(?!.*(\d)\1{1,}).+$/
    const isMatch = rule.test(String(value))
    return  isMatch;
    // return  value.split("").map(x = );
  },
  message: 'Aucun chiffre ne doit  se repeter'
});
extend('noRepeatSameCharFiveTime', {
  // @ts-ignore

  validate(value) {

    const rule = /^(?!(\d)\1{4}).+$/
    const isMatch = rule.test(String(value))
    return  isMatch;
    // return  value.split("").map(x = );
  },
  message: 'Ce chiffre ne doit pas se répéter 5 fois'
});

extend('oneMaj', {
  // @ts-ignore

  validate(value) {

    const rule = /[A-Z]+/g;
    const isMatch = rule.test(String(value))
    return  isMatch;
    // return  value.split("").map(x = );
  },
  message: 'Le mot de passe doit contenir au moins une majuscule'
});
extend('oneMin', {
  // @ts-ignore

  validate(value) {

    const rule = /[a-z]+/g;
    const isMatch = rule.test(String(value))
    return  isMatch;
    // return  value.split("").map(x = );
  },
  message: 'Le mot de passe doit contenir au moins une minuscules'
});
extend('oneInt', {
  // @ts-ignore

  validate(value) {

    const rule = /\d+/g;
    const isMatch = rule.test(String(value))
    return  isMatch;
  },
  message: 'Le mot de passe doit contenir au moins un chiffre'
});
extend('noAlph', {
  // @ts-ignore

  validate(value) {
    const rule = /\W+/g;
    const isMatch = rule.test(String(value))
    return  isMatch;
  },
  message: 'Le mot de passe doit contenir au moins un caractere non-alphanumériques'
});
extend('someChar', {
  // @ts-ignore
  validate(value) {
    const rule = new RegExp('[!"<>`^\\\\!\'<>`^ -]+', 'g')
    const isMatch = rule.test(value)
    // console.log("rule",rule)
    // console.log("isMatch",isMatch)
    return  !isMatch;
  },
  message: "Le mot de passe ne doit pas contenir les caractères suivants : (ESPACE ! - < >)"
});

extend('ageMin', {
  // @ts-ignore
  validate(value) {
    let result = true;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const maxDate = new Date(today)
    const yearMember = new Date(value).getFullYear()
    const age = maxDate.getFullYear() - yearMember
    if (age<18)
    {
      result = false
    }
    return  result;
  },
  message: "L'utilisateur doit avoir au moins 18 ans"
});

extend('ageMax', {
  // @ts-ignore
  validate(value) {
    let result = true;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const maxDate = new Date(today)
    const yearMember = new Date(value).getFullYear()
    const age = maxDate.getFullYear() - yearMember
    if (age>100) {result = false}
    return  result;
  },
  message: "L'utilisateur ne peut pas avoir plus de 100 ans"
});




Vue.component('va-provider', ValidationProvider);
Vue.component('va-observer', ValidationObserver);
//setInteractionMode('lazy');
