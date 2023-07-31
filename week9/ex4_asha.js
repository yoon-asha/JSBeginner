function solution(skill, skill_trees) {
  var answer = 0

  for (let i = 0; i < skill_trees.length; i++) {
    let s = skill.split('')
    let tree = skill_trees[i].split('').filter((el) => s.includes(el))
    let check = true
    for (let j = 0; j < skill.length; j++) {
      if (tree[j] && skill[j] !== tree[j]) check = false
    }
    if (check) answer++
  }

  return answer
}
