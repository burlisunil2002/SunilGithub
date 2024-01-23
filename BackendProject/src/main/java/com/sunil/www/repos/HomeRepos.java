package com.sunil.www.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sunil.www.model.HomeModel;

@Repository
public interface HomeRepos extends JpaRepository<HomeModel,Long>
{

}
