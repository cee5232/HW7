import { LitElement, html, css } from 'lit';

class UNGoal extends LitElement {
  static properties = {
    goal: { type: String },
    label: { type: String },
    colorOnly: { type: Boolean },
    size: { type: String }
  };

  constructor() {
    super();
    this.goal = '1';
    this.label = '';
    this.colorOnly = false;
    this.size = '100px'; // Default size
  }

  render() {
    const goalName = `Goal ${this.goal}: ${this.getGoalName(this.goal)}`;
    const altText = this.label || goalName;
    const goalSvg = `./lib/svgs/goal-${this.goal}.svg`; // Corrected to your "goal-[number].svg" format
    const color = this.getGoalColor(this.goal);

    return html`
      <style>
        .goal {
          width: ${this.size};
          height: ${this.size};
        }
        .color-square {
          background-color: ${color};
          width: ${this.size};
          height: ${this.size};
        }
      </style>
      ${this.colorOnly ? html`
        <div class="color-square"></div>
      ` : html`
        <img class="goal" src="${goalSvg}" alt="${altText}" loading="lazy" fetchpriority="low">
        <p>${goalName}</p> 
      `}
    `;
  }

  getGoalName(goal) {
    const names = {
      '1': 'No Poverty',
      '2': 'Zero Hunger',
      '3': 'Good Health and Well-being',
      '4': 'Quality Education',
      '5': 'Gender Equality',
      '6': 'Clean Water and Sanitation',
      '7': 'Affordable and Clean Energy',
      '8': 'Decent Work and Economic Growth',
      '9': 'Industry, Innovation, and Infrastructure',
      '10': 'Reduced Inequality',
      '11': 'Sustainable Cities and Communities',
      '12': 'Responsible Consumption and Production',
      '13': 'Climate Action',
      '14': 'Life Below Water',
      '15': 'Life on Land',
      '16': 'Peace and Justice Strong Institutions',
      '17': 'Partnerships for the Goals',
    };
    return names[goal] || 'Goal';
  }

  getGoalColor(goal) {
    const colors = {
      '1': '#e5243b',
      '2': '#dda63a',
      '3': '#4c9f38',
      '4': '#c5192d',
      '5': '#ff3a21',
      '6': '#26bde2',
      '7': '#fcc30b',
      '8': '#a21942',
      '9': '#fd6925',
      '10': '#dd1367',
      '11': '#fd9d24',
      '12': '#bf8b2e',
      '13': '#3f7e44',
      '14': '#0a97d9',
      '15': '#56c02b',
      '16': '#00689d',
      '17': '#19486a',
    };
    return colors[goal] || '#000';
  }
}

customElements.define('un-goal', UNGoal);
