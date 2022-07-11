const REQUIRED_FIELD = 'Fill it';

export const loginValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.match(/[а-яА-Я]/)) {
            return 'only latin letters'
        }

        return true;
    }
};

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.length < 2) {
            return 'Pass more then 1 symbol'
        }

        return true;
    }
};