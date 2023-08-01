function solution(skill, skill_trees) {
  var answer = 0
  let s = skill.split('')

  for (let i = 0; i < skill_trees.length; i++) {
    let tree = skill_trees[i].split('').filter((el) => s.includes(el))
    let check = true
    for (let j = 0; j < tree.length; j++) {
      if (skill[j] !== tree[j]) check = false
    }
    if (check) answer++
  }

  return answer
}
