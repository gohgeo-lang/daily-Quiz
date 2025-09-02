const questions = // Day 1 - Easy
    [
        {
            day: 1,
            type: "short",
            difficulty: "easy",
            question: "브라우저 화면이 아닌, 개발자 도구 콘솔 창에 출력하기 위해 사용하는 함수는?",
            keywords: ["console.log"]
        },
        {
            day: 1,
            type: "mcq",
            difficulty: "easy",
            question: "JavaScript는 주로 어디에서 실행되나요?",
            options: ["브라우저", "엑셀", "포토샵"],
            answer: 0
        },
        {
            day: 1,
            type: "short",
            difficulty: "easy",
            question: "JavaScript에서 한 줄 주석을 작성하는 기호는?",
            keywords: ["//"]
        },
        {
            day: 1,
            type: "mcq",
            difficulty: "easy",
            question: "JavaScript에서 여러 줄 주석을 작성할 때 사용하는 기호는?",
            options: ["//", "/* */", "<!-- -->"],
            answer: [1] 
        },
        {
            day: 1,
            type: "mcq",
            difficulty: "easy",
            question: "JavaScript에서 문자열을 콘솔에 출력하는 올바른 예제는?",
            options: [
                'console.log("Hello");',
                "print(Hello);",
                "echo Hello;"
            ],
            answer: 0
        },

        // Day 1 - Normal
        {
            day: 1,
            type: "short",
            difficulty: "normal",
            question: "JavaScript는 대소문자를 구분한다(O/X)?",
            keywords: ["O"]
        },
        {
            day: 1,
            type: "mcq",
            difficulty: "normal",
            question: "다음 중 올바른 JavaScript 식별자는?",
            options: ["let 2age;", "let userName;", "let user-name;"],
            answer: 1
        },
        {
            day: 1,
            type: "short",
            difficulty: "normal",
            question: "명령문의 끝을 나타내는 기호는?",
            keywords: [";"]
        },
        {
            day: 1,
            type: "mcq",
            difficulty: "normal",
            question: "JavaScript에서 경고창(alert)으로 '안녕'을 띄우는 올바른 방법은?",
            options: [
                'alert("안녕");',
                "console.log('안녕');",
                "message('안녕');"
            ],
            answer: 0
        },
        {
            day: 1,
            type: "short",
            difficulty: "normal",
            question: "사용자로부터 문자열 입력을 받을 수 있는 함수는?",
            keywords: ["prompt"]
        },

        // Day 1 - Hard
        {
            day: 1,
            type: "mcq",
            difficulty: "hard",
            question: "JavaScript는 처음에 어떤 이름으로 개발되었나요?",
            options: ["Mocha", "CoffeeScript", "ECMAScript"],
            answer: 0
        },
        {
            day: 1,
            type: "short",
            difficulty: "hard",
            question: "JavaScript를 만든 사람의 이름은?",
            keywords: ["Brendan", "Eich"]
        },
        {
            day: 1,
            type: "mcq",
            difficulty: "hard",
            question: "JavaScript와 Java는 이름은 비슷하지만 서로 다른 언어이다(O/X)?",
            options: ["O", "X"],
            answer: 1
        },
        {
            day: 1,
            type: "short",
            difficulty: "hard",
            question: "개발자 도구(DevTools)를 여는 단축키(Windows 기준)는?",
            keywords: ["F12"]
        },
        {
            day: 1,
            type: "mcq",
            difficulty: "hard",
            question: "console.log('Hello') 실행 후 출력되는 위치는?",
            options: [
                "브라우저 화면(웹페이지 본문)",
                "개발자 도구 콘솔",
                "아무 일도 일어나지 않는다"
            ],
            answer: 1
        },

        // Day 1 - 추가 연습
        {
            day: 1,
            type: "short",
            difficulty: "easy",
            question: "단순히 알림(경고) 메시지를 보여주는 함수는?",
            keywords: ["alert"]
        },
        {
            day: 1,
            type: "short",
            difficulty: "normal",
            question: "사용자에게 '확인/취소'를 선택하도록 하는 함수는?",
            keywords: ["confirm"]
        },
        {
            day: 1,
            type: "mcq",
            difficulty: "normal",
            question: "JavaScript 파일의 확장자는 무엇인가?",
            options: [".java", ".js", ".jsx"],
            answer: 1
        },
        {
            day: 1,
            type: "short",
            difficulty: "hard",
            question: "JavaScript 표준 사양을 뜻하는 ECMAScript는 보통 어떤 약어로 불리나요?",
            keywords: ["ES"]
        },
        {
            day: 1,
            type: "mcq",
            difficulty: "hard",
            question: "JavaScript는 몇 년도에 만들어졌나요?",
            options: ["1995", "2000", "2010"],
            answer: 0
        }
    ]

// Day 2 - Easy
questions.push(
    {
        day: 2,
        type: "short",
        difficulty: "easy",
        question: "값을 재할당할 수 없는 변수 선언 키워드는? (상수 선언)",
        keywords: ["const"]
    },
    {
        day: 2,
        type: "short",
        difficulty: "easy",
        question: "값을 재할당할 수 있는 변수 선언 키워드는? (가장 자주 사용)",
        keywords: ["let"]
    },
    {
        day: 2,
        type: "mcq",
        difficulty: "easy",
        question: "과거에 사용되었지만 현재는 권장되지 않는 변수 선언 키워드는?",
        options: ["let", "const", "var"],
        answer: 2
    },
    {
        day: 2,
        type: "short",
        difficulty: "easy",
        question: "변수 이름에 공백 대신 단어를 이어 붙일 때 사용하는 관례적 표기법은?",
        keywords: ["camelCase"]
    },
    {
        day: 2,
        type: "mcq",
        difficulty: "easy",
        question: "상수(const) 이름을 선언할 때 흔히 사용하는 표기법은?",
        options: ["소문자", "대문자(UPPER_CASE)", "숫자"],
        answer: 1
    },

    // Day 2 - Normal
    {
        day: 2,
        type: "short",
        difficulty: "normal",
        question: "변수를 선언만 하고 초기화하지 않으면 어떤 값이 자동으로 들어가나요?",
        keywords: ["undefined"]
    },
    {
        day: 2,
        type: "mcq",
        difficulty: "normal",
        question: "다음 중 올바른 변수 선언은?",
        options: ["let 2age;", "let userName;", "let user-name;"],
        answer: 1
    },
    {
        day: 2,
        type: "mcq",
        difficulty: "normal",
        question: "const로 선언한 배열에 새로운 요소를 추가할 수 있다? (단, 변수 자체의 재할당은 불가)",
        options: ["O", "X"],
        answer: 0
    },

    {
        day: 2,
        type: "mcq",
        difficulty: "normal",
        question: "이미 선언된 변수 이름으로 다시 변수를 선언하면 어떤 오류 메시지가 발생하나요?",
        options: [
            "SyntaxError: Unexpected token",
            "ReferenceError: is not defined",
            "SyntaxError: Identifier has already been declared"
        ],
        answer: 2
    },

    {
        day: 2,
        type: "mcq",
        difficulty: "normal",
        question: "var 키워드의 특징으로 옳은 것은?",
        options: ["재선언 가능하다", "블록 스코프를 지원한다", "재할당이 불가능하다"],
        answer: 0
    },

    // Day 2 - Hard
    {
        day: 2,
        type: "short",
        difficulty: "hard",
        question: "호이스팅(hoisting)이란 변수/함수의 무엇이 코드 최상단으로 끌어올려지는 현상을 말하나요?",
        keywords: ["선언"]
    },
    {
        day: 2,
        type: "mcq",
        difficulty: "hard",
        question: "다음 중 블록 스코프를 가지는 변수 선언 키워드는?",
        options: ["var", "let", "둘 다 아님"],
        answer: 1
    },
    {
        day: 2,
        type: "short",
        difficulty: "hard",
        question: "var로 선언한 변수의 스코프 범위는 무엇인가요?",
        keywords: ["function", "scope"]
    },
    {
        day: 2,
        type: "mcq",
        difficulty: "hard",
        question: "const로 선언한 객체(object)의 속성은 변경할 수 있을까요?",
        options: ["네, 속성은 변경 가능하다", "아니요, 불가능하다"],
        answer: 0
    },
    {
        day: 2,
        type: "mcq",
        difficulty: "hard",
        question: "TDZ(Temporal Dead Zone, 일시적 사각지대)는 어떤 변수 선언 키워드와 관련 있나요? (모두 고르시오)",
        options: ["var", "let", "const"],
        answer: [1, 2]   // let, const
    },

    // Day 2 - 추가 연습
    {
        day: 2,
        type: "mcq",
        difficulty: "easy",
        question: "JavaScript에서 변수 식별자는 반드시 어떤 문자로 시작해야 하나요? (모두 고르시오)",
        options: ["알파벳 문자", "underscore(_)", "달러 기호($)", "숫자"],
        answer: [0, 1, 2]  // 복수 정답
    }
    ,
    {
        day: 2,
        type: "mcq",
        difficulty: "normal",
        question: "다음 중 올바른 변수 이름은?",
        options: ["let my-var;", "let myVar;", "let my var;"],
        answer: 1
    },
    {
        day: 2,
        type: "short",
        difficulty: "normal",
        question: "const로 변수를 선언할 때 반드시 해줘야 하는 것은?",
        keywords: ["초기화"]
    },
    {
        day: 2,
        type: "mcq",
        difficulty: "hard",
        question: "var, let, const 중 호이스팅 시 'undefined'로 초기화되는 것은?",
        options: ["var", "let", "const"],
        answer: 0
    }
);


// Day 3 - Easy
questions.push(
    {
        day: 3,
        type: "short",
        difficulty: "easy",
        question: "정수와 소수(실수)를 모두 표현할 수 있는 JavaScript 자료형은?",
        keywords: ["number"]
    },
    {
        day: 3,
        type: "mcq",
        difficulty: "easy",
        question: "문자열을 표현할 때 사용할 수 있는 따옴표는? (모두 고르시오)",
        options: ["작은따옴표 (' ')", "큰따옴표 (\" \")", "백틱 (` `)"],
        answer: [0, 1, 2] // 세 가지 모두 가능
    }
    ,
    {
        day: 3,
        type: "mcq",
        difficulty: "easy",
        question: "불리언(Boolean) 타입의 값은 무엇인가요?",
        options: ["true / false", "yes / no", "1 / 0"],
        answer: 0
    },
    {
        day: 3,
        type: "short",
        difficulty: "easy",
        question: "값이 없음(null)과 정의되지 않음(undefined) 중, 변수를 선언만 하고 초기화하지 않으면 어떤 값이 들어가나요?",
        keywords: ["undefined"]
    },
    {
        day: 3,
        type: "short",
        difficulty: "easy",
        question: "NaN은 무엇의 약자인가요? (숫자가 아님을 뜻함)",
        keywords: ["Not", "a", "Number"]
    },

    // Day 3 - Normal
    {
        day: 3,
        type: "mcq",
        difficulty: "normal",
        question: "'10' + 5 의 결과는 무엇일까요? (문자열 연결 vs 숫자 연산)",
        options: ["15", "105", "NaN"],
        answer: 1
    },
    {
        day: 3,
        type: "mcq",
        difficulty: "normal",
        question: "'10' - 5 의 결과는 무엇일까요? (문자열이 숫자로 변환될 수 있음)",
        options: ["5", "NaN", "105"],
        answer: 0
    },
    {
        day: 3,
        type: "mcq",
        difficulty: "normal",
        question: "Infinity는 주로 어떤 연산에서 발생하나요?",
        options: [
            "0으로 나누기",
            "덧셈",
            "곱셈",
            "뺄셈"
        ],
        answer: 0
    }
    ,
    {
        day: 3,
        type: "short",
        difficulty: "normal",
        question: "문자열의 길이를 구하는 속성은?",
        keywords: ["length"]
    },
    {
        day: 3,
        type: "short",
        difficulty: "normal",
        question: "문자열을 대문자로 변환하는 메서드는?",
        keywords: ["toUpperCase"]
    },

    // Day 3 - Hard
    {
        day: 3,
        type: "short",
        difficulty: "hard",
        question: "isNaN() 함수는 어떤 값을 검사하나요? (숫자가 아닌 값 여부)",
        keywords: ["NaN"]
    },
    {
        day: 3,
        type: "mcq",
        difficulty: "hard",
        question: "문자열 'Hello'에서 'e'의 위치(index)를 찾는 메서드는?",
        options: ["find()", "indexOf()", "searchChar()"],
        answer: 1
    },
    {
        day: 3,
        type: "short",
        difficulty: "hard",
        question: "JavaScript에서 데이터 타입을 확인하는 연산자는?",
        keywords: ["typeof"]
    },
    {
        day: 3,
        type: "mcq",
        difficulty: "hard",
        question: "Number('abc') 의 결과는 무엇일까요?",
        options: ["NaN", "0", "undefined"],
        answer: 0
    },
    {
        day: 3,
        type: "short",
        difficulty: "hard",
        question: "parseInt('3.14') 의 결과는? (소수점 이하 버려짐)",
        keywords: ["3"]
    },

    // Day 3 - 추가 연습
    {
        day: 3,
        type: "short",
        difficulty: "easy",
        question: "문자열을 숫자로 바꾸는 전역 함수는?",
        keywords: ["Number"]
    },
    {
        day: 3,
        type: "mcq",
        difficulty: "normal",
        question: "불리언 타입으로 변환했을 때 false가 되는 값은? (모두 고르시오)",
        options: ["0", "\"\"", "null", "undefined", "NaN", "42"],
        answer: [0, 1, 2, 3, 4]  // falsy 값 전부
    }
    ,
    {
        day: 3,
        type: "mcq",
        difficulty: "normal",
        question: "typeof null 의 결과는 무엇일까요? (자바스크립트 초기 설계 오류로 잘 알려짐)",
        options: ["null", "object", "undefined"],
        answer: 1
    },
    {
        day: 3,
        type: "short",
        difficulty: "hard",
        question: "0.1 + 0.2 === 0.3 의 결과는 true일까요 false일까요? (부동소수점 연산 문제)",
        keywords: ["false"]
    }
);


// Day 4 - Easy
questions.push(
    {
        day: 4,
        type: "short",
        difficulty: "easy",
        question: "문자열 길이를 구하는 속성은?",
        keywords: ["length"]
    },
    {
        day: 4,
        type: "short",
        difficulty: "easy",
        question: "문자열을 소문자로 바꾸는 메서드는?",
        keywords: ["toLowerCase"]
    },
    {
        day: 4,
        type: "short",
        difficulty: "easy",
        question: "논리 NOT을 나타내는 연산자는?",
        keywords: ["!"]
    },
    {
        day: 4,
        type: "mcq",
        difficulty: "easy",
        question: "다음 중 문자열 결합 연산자는?",
        options: ["+", "-", "*"],
        answer: 0
    },
    {
        day: 4,
        type: "short",
        difficulty: "easy",
        question: "조건문 if는 ( ) 안에 무엇을 넣어야 하나요? (정답예시: OO식)",
        keywords: ["조건식"]
    },

    // Day 4 - Normal
    {
        day: 4,
        type: "mcq",
        difficulty: "normal",
        question: "'Hello'.indexOf('e') 의 결과는? (※ 문자열 인덱스는 0부터 시작)",
        options: ["0", "1", "2"],
        answer: 1
    },
    {
        day: 4,
        type: "short",
        difficulty: "normal",
        question: "문자열 양쪽 공백을 제거하는 메서드는?",
        keywords: ["trim"]
    },
    {
        day: 4,
        type: "mcq",
        difficulty: "normal",
        question: "삼항 연산자의 기본 구조는 무엇인가요?",
        options: [
            "조건 ? 값1 : 값2",
            "if (조건) { 값1 } else { 값2 }",
            "조건 && 값1 || 값2"
        ],
        answer: 0
    },

    {
        day: 4,
        type: "mcq",
        difficulty: "normal",
        question: "10 > 5 && 3 > 1 의 결과는?",
        options: ["true", "false", "undefined"],
        answer: 0
    },
    {
        day: 4,
        type: "short",
        difficulty: "normal",
        question: "switch문에서 각 case 실행 후 다음 case로 넘어가지 않게 하려면 반드시 어떤 키워드를 사용해야 하나요?",
        keywords: ["break"]
    },

    // Day 4 - Hard
    {
        day: 4,
        type: "mcq",
        difficulty: "hard",
        question: "if문과 switch문 중 많은 경우의 수(다중 분기) 처리를 더 읽기 쉽게 할 수 있는 것은?",
        options: ["if문", "switch문", "둘 다 아님"],
        answer: 1
    },
    {
        day: 4,
        type: "mcq",
        difficulty: "hard",
        question: "Boolean() 함수는 어떤 용도로 쓰이나요? (모두 고르시오)",
        options: [
            "값을 true 또는 false로 강제 변환한다",
            "문자열을 숫자로 변환한다",
            "조건문 안에서 truthy/falsy 판별을 쉽게 한다"
        ],
        answer: [0, 2]  // 변환 목적 + 조건문 활용
    }
    ,
    {
        day: 4,
        type: "mcq",
        difficulty: "hard",
        question: "null과 undefined를 느슨한 비교(==)로 비교하면 결과는?",
        options: ["true", "false"],
        answer: 0
    },
    {
        day: 4,
        type: "short",
        difficulty: "hard",
        question: "if (0) { ... } 블록은 실행될까요? (0은 falsy 값)",
        keywords: ["실행되지 않는다"]
    },
    {
        day: 4,
        type: "mcq",
        difficulty: "hard",
        question: "문자열 'Hello'에서 'z'를 찾으면 indexOf의 결과는?",
        options: ["-1", "0", "null"],
        answer: 0
    },

    // Day 4 - 추가 연습
    {
        day: 4,
        type: "mcq",
        difficulty: "easy",
        question: "조건문에서 else 블록은 어떤 경우에 실행되나요?",
        options: [
            "조건식이 true일 때",
            "조건식이 false일 때",
            "조건문과 상관없이 항상 실행된다"
        ],
        answer: 1
    },
    {
        day: 4,
        type: "mcq",
        difficulty: "normal",
        question: "10 || 20 의 결과는? (※ OR 연산자는 첫 번째 truthy 값을 반환)",
        options: ["10", "20", "true"],
        answer: 0
    },
    {
        day: 4,
        type: "short",
        difficulty: "normal",
        question: "10 && 20 의 결과는? (※ AND 연산자는 마지막 truthy 값을 반환)",
        keywords: ["20"]
    },
    {
        day: 4,
        type: "short",
        difficulty: "hard",
        question: "NaN === NaN 의 결과는? (NaN은 자기 자신과도 같지 않음)",
        keywords: ["false"]
    }
);


// Day 5 - Easy
questions.push(
    {
        day: 5,
        type: "short",
        difficulty: "easy",
        question: "배열의 첫 번째 요소 인덱스 값은 무엇인가요? (JavaScript 배열은 0부터 시작)",
        keywords: ["0"]
    },
    {
        day: 5,
        type: "mcq",
        difficulty: "easy",
        question: "[10, 20, 30].length 의 결과는?",
        options: ["2", "3", "4"],
        answer: 1
    },
    {
        day: 5,
        type: "short",
        difficulty: "easy",
        question: "배열의 마지막 요소를 제거하고 그 값을 반환하는 메서드는?",
        keywords: ["pop"]
    },
    {
        day: 5,
        type: "short",
        difficulty: "easy",
        question: "배열의 마지막에 새 요소를 추가하는 메서드는?",
        keywords: ["push"]
    },
    {
        day: 5,
        type: "short",
        difficulty: "easy",
        question: "배열의 첫 번째 요소를 제거하고 그 값을 반환하는 메서드는?",
        keywords: ["shift"]
    },

    // Day 5 - Normal
    {
        day: 5,
        type: "short",
        difficulty: "normal",
        question: "배열의 맨 앞에 새 요소를 추가하는 메서드는?",
        keywords: ["unshift"]
    },
    {
        day: 5,
        type: "mcq",
        difficulty: "normal",
        question: "[1,2,3].indexOf(2) 의 결과는? (인덱스는 0부터 시작)",
        options: ["0", "1", "2"],
        answer: 1
    },
    {
        day: 5,
        type: "short",
        difficulty: "normal",
        question: "for문에서 초기값, 조건식, 증감식을 적는 괄호 기호는?",
        keywords: ["()"]
    },
    {
        day: 5,
        type: "mcq",
        difficulty: "normal",
        question: "while문은 어떤 경우에 반복을 계속 실행하나요?",
        options: ["조건식이 true일 때", "조건식이 false일 때", "항상 실행된다"],
        answer: 0
    },
    {
        day: 5,
        type: "short",
        difficulty: "normal",
        question: "배열의 모든 요소를 반복하여 출력할 수 있는 구문은 for (let x of 배열) {...} 이다(O/X)?",
        keywords: ["O"]
    },

    // Day 5 - Hard
    {
        day: 5,
        type: "short",
        difficulty: "hard",
        question: "반복문 안에서 break문은 어떤 상황에서 실행을 즉시 종료하나요?",
        keywords: ["조건", "만족", "즉시 종료"]
    },
    {
        day: 5,
        type: "mcq",
        difficulty: "hard",
        question: "continue문은 어떤 동작을 하나요?",
        options: ["현재 반복만 건너뛰고 다음 반복 실행", "반복문 전체 종료", "무한 반복"],
        answer: 0
    },
    {
        day: 5,
        type: "short",
        difficulty: "hard",
        question: "함수를 선언할 때 사용하는 키워드는?",
        keywords: ["function"]
    },
    {
        day: 5,
        type: "mcq",
        difficulty: "hard",
        question: "return문이 없는 함수의 기본 반환값은?",
        options: ["null", "undefined", "0"],
        answer: 1
    },
    {
        day: 5,
        type: "short",
        difficulty: "hard",
        question: "for문 안에 또 다른 for문이 들어간 구조를 무엇이라 하나요?",
        keywords: ["중첩", "nested"]
    },

    // Day 5 - 추가 연습
    {
        day: 5,
        type: "short",
        difficulty: "easy",
        question: "for문에서 i++는 i 값을 몇씩 증가시키나요?",
        keywords: ["1"]
    },
    {
        day: 5,
        type: "mcq",
        difficulty: "normal",
        question: "for (let i=0; i<3; i++) { console.log(i); } 의 출력 결과는?",
        options: ["0 1 2", "1 2 3", "0 1 2 3"],
        answer: 0
    },
    {
        day: 5,
        type: "short",
        difficulty: "normal",
        question: "배열의 각 요소에 대해 반복적으로 작업을 수행하는 메서드는?",
        keywords: ["forEach"]
    },
    {
        day: 5,
        type: "mcq",
        difficulty: "hard",
        question: "JavaScript에서 함수를 값처럼 변수에 대입할 수 있는 특성을 무엇이라고 하나요?",
        options: [
            "콜백 함수 (Callback Function)",
            "일급 객체 (First-class Object)",
            "고차 함수 (Higher-order Function)",
            "프로토타입 기반 상속"
        ],
        answer: 1
    }

);


// === 문제 데이터 (Day1~5 총 100문제) ===
// const questions = [ ... ]; // Day1~5 모든 questions.push(...) 포함
// === 문제 데이터 (Day1~5 총 100문제) ===
// const questions = [ ... ]; // Day1~5 모든 questions.push(...) 포함

let score = 0, highScore = 0, wrongNotes = [], correctStreak = 0, wrongCount = 0;
let currentDifficulty = "easy", currentQuestion = null, isAnswered = false;
let currentStep = 1, currentIndex = 0, stageTotal = 10;
let timer = null, timeLeft = 300;
let stageQuestions = [];

// 점수판 업데이트
function updateScoreBoard() {
    document.getElementById("currentScore").textContent = score;
    document.getElementById("highScore").textContent = highScore;
    document.getElementById("combo").textContent = correctStreak;
    document.getElementById("wrongCount").textContent = wrongCount;

    // 문제 번호만 갱신 (총 문제 수는 HTML에 "/ 10"으로 고정)
    document.getElementById("currentIndex").textContent = currentIndex + 1;
}

// 진행도 업데이트
function updateProgress() {
    const percent = Math.floor((currentIndex / stageTotal) * 100);
    const bar = document.getElementById("progressBar");
    bar.style.width = percent + "%";
    bar.textContent = percent + "%";
}



// 난이도 배지
function updateDifficultyBadge() {
    const badge = document.getElementById("difficultyBadge");
    badge.textContent = currentDifficulty.toUpperCase();
    badge.className = "badge " + (currentDifficulty === "easy" ? "bg-success"
        : currentDifficulty === "normal" ? "bg-primary" : "bg-danger");
}

// 타이머
function startTimer() {
    clearInterval(timer);
    timeLeft = 300;
    document.getElementById("timer").textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("시간 초과! 게임 종료");
            resetGame();
        }
    }, 1000);
}

// 단계 문제 추출
function getStageQuestions() {
    const level = currentStep === 1 ? "easy" : currentStep === 2 ? "normal" : "hard";
    currentDifficulty = level;
    const pool = questions.filter(q => q.difficulty === level);
    return pool.sort(() => Math.random() - 0.5).slice(0, stageTotal);
}

// 문제 로딩
function loadQuestion() {
    if (currentIndex >= stageTotal) { endStage(); return; }
    currentQuestion = stageQuestions[currentIndex];
    isAnswered = false;

    document.getElementById("question").textContent = currentQuestion.question;
    const resultBox = document.getElementById("result");
    resultBox.textContent = ""; resultBox.className = "result";
    const optionsDiv = document.getElementById("options");
    const answerInput = document.getElementById("answer");
    optionsDiv.innerHTML = ""; answerInput.value = "";

    if (currentQuestion.type === "mcq") {
        if (Array.isArray(currentQuestion.answer)) {
            // 복수정답 → 체크박스
            currentQuestion.options.forEach((opt, idx) => {
                const div = document.createElement("div");
                div.className = "form-check text-start mb-2";
                const input = document.createElement("input");
                input.type = "checkbox"; input.className = "form-check-input";
                input.id = "opt" + idx; input.value = idx;
                const label = document.createElement("label");
                label.className = "form-check-label"; label.setAttribute("for", "opt" + idx);
                label.textContent = opt;
                div.appendChild(input); div.appendChild(label);
                optionsDiv.appendChild(div);
            });
            answerInput.style.display = "none";
            document.getElementById("submitBtn").style.display = "inline-block";
        } else {
            // 단일정답 → 버튼
            currentQuestion.options.forEach((opt, idx) => {
                const btn = document.createElement("button");
                btn.textContent = opt;
                btn.className = "btn btn-outline-secondary mb-2 w-100";
                btn.onclick = () => submitAnswer(idx);
                optionsDiv.appendChild(btn);
            });
            answerInput.style.display = "none";
            document.getElementById("submitBtn").style.display = "none";
        }
    } else {
        // 단답형
        answerInput.style.display = "inline-block";
        document.getElementById("submitBtn").style.display = "inline-block";
    }

    updateScoreBoard();
    updateDifficultyBadge();
}

// 정답 체크
function submitAnswer(userInput = null) {
    if (isAnswered) return; isAnswered = true;
    const q = currentQuestion;
    const answerInput = document.getElementById("answer");
    const resultBox = document.getElementById("result");
    let userAnswer = answerInput.value.trim();

    if (q.type === "short" && userAnswer === "") {
        resultBox.textContent = "⚠️ 답을 입력해주세요."; isAnswered = false; return;
    }

    let correct = false;
    if (q.type === "mcq") {
        if (Array.isArray(q.answer)) {
            const checked = Array.from(document.querySelectorAll("#options input:checked"))
                .map(el => parseInt(el.value)).sort();
            const correctAns = [...q.answer].sort();
            correct = JSON.stringify(checked) === JSON.stringify(correctAns);
            userAnswer = checked.map(i => q.options[i]).join(", ");
        } else correct = userInput === q.answer;
    } else if (q.type === "short") {
        const lower = userAnswer.toLowerCase();
        correct = q.keywords.some(k => lower.includes(k.toLowerCase()));
    }

    if (correct) {
        score++; correctStreak++; if (score > highScore) highScore = score;
        resultBox.textContent = "✅ 정답!"; resultBox.className = "result correct";
    } else {
        wrongCount++; correctStreak = 0;
        resultBox.textContent = "❌ 오답!"; resultBox.className = "result wrong";
        const exists = wrongNotes.some(note => note.q === q.question);
        if (!exists) wrongNotes.push({
            q: q.question,
            a: Array.isArray(q.answer) ? q.answer.map(i => q.options[i]).join(", ")
                : (q.type === "mcq" ? q.options[q.answer] : q.keywords.join(", ")),
            your: userInput !== null && q.type === "mcq" && !Array.isArray(q.answer)
                ? q.options[userInput] : userAnswer
        });
        updateWrongNotes();
    }

    updateScoreBoard();
    setTimeout(() => { 
        currentIndex++; 
        updateProgress();
        loadQuestion();
    }, 1200);
}

// 오답노트
function updateWrongNotes() {
    const list = document.getElementById("wrongList"); list.innerHTML = "";
    wrongNotes.forEach(note => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `문제: ${note.q} | 정답: ${note.a} | 당신의 답: ${note.your}`;
        list.appendChild(li);
    });
}

// 단계 종료
function endStage() {
    clearInterval(timer);
    const percent = (score / stageTotal) * 100;
    alert(`단계 ${currentStep} 종료!\n총 ${stageTotal}문제 중 ${score}개 정답\n정답률: ${percent.toFixed(1)}%`);
    showStageMenu(percent >= 90);
}

// 단계 선택 메뉴
function showStageMenu(passed) {
    const menuDiv = document.createElement("div");
    menuDiv.className = "text-center mt-4";
    if (currentStep === 1) {
        menuDiv.innerHTML = passed
            ? `<button class="btn btn-success m-2" onclick="startStage(2)">2단계 진행</button>
         <button class="btn btn-secondary m-2" onclick="startStage(1)">1단계 다시</button>`
            : `<button class="btn btn-danger m-2" onclick="startStage(1)">1단계 재도전</button>`;
    }
    if (currentStep === 2) {
        menuDiv.innerHTML = `
      <button class="btn btn-secondary m-2" onclick="startStage(1)">1단계</button>
      <button class="btn btn-warning m-2" onclick="startStage(2)">2단계 다시</button>
      ${passed ? '<button class="btn btn-success m-2" onclick="startStage(3)">3단계 진행</button>' : ""}`;
    }
    if (currentStep === 3) {
        menuDiv.innerHTML = `
      <button class="btn btn-secondary m-2" onclick="startStage(1)">1단계</button>
      <button class="btn btn-secondary m-2" onclick="startStage(2)">2단계</button>
      <button class="btn btn-secondary m-2" onclick="startStage(3)">3단계 다시</button>`;
    }
    document.querySelector(".card-body").appendChild(menuDiv);
}

// 초기화 & 단계 시작
function resetGame() { startStage(1); }
function startStage(step) {
    score = 0; wrongCount = 0; correctStreak = 0;
    currentStep = step; currentIndex = 0; wrongNotes = [];
    stageQuestions = getStageQuestions();
    document.getElementById("wrongList").innerHTML = "";
    document.querySelectorAll(".card-body > div.text-center.mt-4").forEach(m => m.remove());
    
    updateProgress();
    loadQuestion(); 
    startTimer();
}

// 이벤트
document.getElementById("answer").addEventListener("keydown", e => {
    if (e.key === "Enter" && !isAnswered) submitAnswer();
});
document.getElementById("submitBtn").addEventListener("click", () => submitAnswer());

// 시작
startStage(1);
